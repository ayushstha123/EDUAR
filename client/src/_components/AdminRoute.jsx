import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export default function AdminRoute() {
  const userInfo = useSelector((state) => state.auth || []);
  const { toast } = useToast();
  const isAdmin = userInfo?.role === "admin";

  if (userInfo?.role !== "admin") {
    toast({
      title: "You are not authorized to access this page.",
    });
    return;
  }
  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
}