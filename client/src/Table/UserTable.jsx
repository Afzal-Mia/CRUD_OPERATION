import React, { useState } from 'react';
import Table from '../Component/Table';
import AddUser from '../Component/AddUser';
import UpdatedUser from '../Component/UpdatedUser';
import DeletUser from '../Component/DeletUser';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function UserTable() {
    const [userId, setUserId] = useState();
    const [updatedUserId, setUpdatedUserId] = useState();
    const [value, setValue] = useState({
        name: "",
        fathername: "",
        email: "",
        phone: ""
    });

    const baseUrl = "https://crud-operation-6tpw.onrender.com";

    const deletuser = (userid) => {
        setUserId(userid);
    };

    const handleUserDelet = async () => {
        try {
            const DeletUser = await axios.delete(`${baseUrl}/api/delete/${userId}`);
            const response = DeletUser.data;
            if (response.success) {
                toast.success(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handlechange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };

    const UpadteUserData = (Updatedid) => {
        setUpdatedUserId(Updatedid);
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {
            const UpdatedUser = await axios.put(`${baseUrl}/api/update/${updatedUserId}`, value);
            const response = UpdatedUser.data;

            if (response.success) {
                toast.success(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="user-table-container">
            <Table Deletuser={deletuser} baseUrl={baseUrl} UpdatedUserData={UpadteUserData} />
            <div className="form-container">
                <AddUser baseUrl={baseUrl} />
                <UpdatedUser handleOnSubmit={handleOnSubmit} value={value} handlechange={handlechange} />
                <DeletUser handleUserDelet={handleUserDelet} />
            </div>
        </div>
    );
}
