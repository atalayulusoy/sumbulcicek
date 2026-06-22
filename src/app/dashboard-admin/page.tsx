import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { getAdminFromCookies } from "@/lib/auth";
import { buildMetadata } from "@/lib/metadata";
import { getDashboardSnapshot } from "@/lib/services/storefront";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function generateMetadata() {
  return buildMetadata({
    title: "Dashboard admin",
    description: "SÜMBÜL GARDEN admin dashboard.",
    noIndex: true,
    pathname: "/dashboard-admin",
  });
}

export default async function DashboardAdminPage() {
  const admin = await getAdminFromCookies();

  if (!admin) {
    redirect("/secret-admin-login");
  }

  const snapshot = await getDashboardSnapshot();

  return <AdminDashboard initialData={snapshot} />;
}
