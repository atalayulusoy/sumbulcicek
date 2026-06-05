import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { buildMetadata } from "@/lib/metadata";
import { getDashboardSnapshot } from "@/lib/services/storefront";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = buildMetadata({
  title: "Dashboard admin",
  description: "SÜMBÜL GARDEN admin dashboard.",
  pathname: "/dashboard-admin",
});

export default async function DashboardAdminPage() {
  const snapshot = await getDashboardSnapshot();

  return <AdminDashboard initialData={snapshot} />;
}
