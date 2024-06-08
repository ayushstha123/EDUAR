import Button from '@/_components/Button';
import { useDeleteUserMutation, useGetAllUsersQuery } from '@/slices/api/api.users';
import { setUsers } from '@/slices/usersSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CircleAlert, Loader } from 'lucide-react';

export default function Users() {
  const { userInfo: currentUser } = useSelector((state) => state.auth || [])
  const fetchedUsersData = useGetAllUsersQuery() || [];
  const [deleteUser, { data: deletedUser, isLoading: isDeleting, error }] = useDeleteUserMutation();
  const usersData = useSelector((state) => state.users.data || [])
  const dispatch = useDispatch()

  useEffect(() => {
    const users = fetchedUsersData?.currentData?.users
    if (users) dispatch(setUsers(users))

    console.log(filteredUsersData.length);

  }, [fetchedUsersData])

  const handleDelete = async (userId) => {
    await deleteUser(userId)
  }

  const filteredUsersData = usersData
    ?.filter(user => user?._id !== currentUser?._id)

  return (
    <main className="h-screen">
      <article className="w-[50%] mx-auto">
        <h1 className="text-3xl font-bold" >Manage Users</h1>
        <section className="my-6 space-y-2 w-full">
          {filteredUsersData
            ?.map((user) => (
              <figure key={user._id} className="bg-white px-5 w-full mx-auto h-16 rounded-md border flex items-center justify-between shadow-md" >
                <div className="flex items-center gap-3">

                  <span className="text-xl font-bold">
                    {user.name}
                  </span>
                  <span className="font-semibold text-indigo-700">
                    @{user.username}
                  </span>
                </div>
                <span className="font-semibold">
                  {user.email}
                </span>
                <Button size="sm" className="" onClick={() => handleDelete(user._id)} >
                  {isDeleting && <Loader className="size-4 animate-spin" />}
                  {!isDeleting && "Delete"}
                </Button>
              </figure>
            )
            )
          }
          {filteredUsersData.length < 1 && <div className="bg-red-100 p-2 w-full border border-red-300 rounded-md flex items-center justify-center gap-3" >
            <CircleAlert className="size-4 text-red-500" />No users found except you</div>}
        </section>
      </article>
    </main>
  )
}
