import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  DocumentData,
} from "firebase/firestore";
import db from "../db/firebase-config";

const UserListPage = () => {
  const [users, setUsers] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userCollection = collection(db, "users");
      const snapshot = await getDocs(userCollection);
      const userData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setUsers(userData);
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id: any) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setUsers(users.filter((user) => user.id !== id));
      console.log("Document with ID: ", id, " deleted successfully.");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <>
      <NavBar />
      <h2 className="card-title fs-6">User List</h2>
      {users.map((user) => (
        <div className="container mt-3">
          <div className="card bg p-0 w-auto">
            <div className="card-body bg-warning">
              <h2 className="card-title fs-6">User List</h2>
              <p key={user.id} className="fs-4">
                {user.data.text}
              </p>
              <Button onClick={() => handleDelete(user.id)}>Delete</Button>
            </div>
            <div className="card-footer bg-warning"></div>
          </div>
        </div>
      ))}
      {/* {users.map((user) => (
        <div className="container pt-4">
          <h3 className="mb-4">User List</h3>
          <p className="fs-4">
            <p key={user.id} className="fs-4">
              {user.data.text}
              <Button onClick={() => handleDelete(user.id)}>Delete</Button>
            </p>
          </p>
        </div>
      ))} */}
    </>
  );
};

export default UserListPage;
