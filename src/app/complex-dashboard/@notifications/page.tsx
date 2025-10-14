import { Card } from "@/components/card";
import Link from "next/link";

const Notifications = () => {
  return (
    <div>
      <Card>
        Notifications {""}
        <div className="ml-3 underline">
          <Link href="/complex-dashboard/archived">Archived</Link>
        </div>
      </Card>
      ;
    </div>
  );
};

export default Notifications;
