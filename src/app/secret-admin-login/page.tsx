import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata() {
  return buildMetadata({
    title: "Admin giris",
    description: "Gizli admin paneli giris ekrani.",
    noIndex: true,
    pathname: "/secret-admin-login",
  });
}

export default function SecretAdminLoginPage() {
  return (
    <div className="container-edge flex min-h-[78vh] items-center justify-center py-16">
      <AdminLoginForm />
    </div>
  );
}
