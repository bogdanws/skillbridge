import Drawer from "@/components/drawer/Drawer";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return <>
        <Drawer/>
        {children}
    </>
}