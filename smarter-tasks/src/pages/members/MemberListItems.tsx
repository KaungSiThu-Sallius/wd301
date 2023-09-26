/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { deleteMember } from '../../context/members/actions';
import { useMembersState, useMembersDispatch } from "../../context/members/context";

export default function MemberListItems() {

    let state: any = useMembersState();
    const dispatchMembers: any = useMembersDispatch();

    const { members, isLoading, isError, errorMessage } = state
    console.log(members);

    if (members.length === 0 && isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>{errorMessage}</span>;
    }

    const handleDeleteMember = async (member: any) => {
        const updateMember = members.filter((_member: any) => _member.id !== member.id);
        await deleteMember(dispatchMembers, member.id, updateMember);
    };

    return (
        <>
            {members.map((member: any) => (
                <div key={member.id} className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{member.name}</h5>
                    <p className="mb-2 text-md font-medium tracking-tight text-gray-900 dark:text-white">{member.email}</p>
                    <div>
                        <button onClick={() => handleDeleteMember(member)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" /> </svg></button>
                    </div>
                </div>
            ))}
        </>
    );
}