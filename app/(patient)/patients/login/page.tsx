import UserLogin from "@/components/users/UserLogin";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  return <UserLogin isPatient={true} />;
}
