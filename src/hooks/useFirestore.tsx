// hooks
import { useEffect, useState } from "react";

// firebase
import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where
} from "firebase/firestore";

// interface
import { conditionInterface } from "../interfaces/ConditionInterface";

const useFirestore = (
  collectionName: string,
  condition?: conditionInterface
) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, collectionName);

    let q = query(collectionRef, orderBy("createdAt"));

    if (condition) {
      if (!condition.compareValue) {
        setDocuments([]);
        return;
      }
      q = query(
        q,
        where(condition.fieldName, condition.operator, condition.compareValue)
      );
    }

    const unsubscribe = onSnapshot(q, (snapshot: any) => {
      if (!snapshot.empty) {
        const data = snapshot.docs.map((doc: any) => ({
          ...doc.data(),
          id: doc.id
        }));

        setDocuments(data);
      }
    });

    return () => {
      unsubscribe(); // Hủy lắng nghe khi component unmount
    };
  }, [collectionName, condition]);

  return documents;
};

export default useFirestore;
