
import { useState } from "react";
import AnnoncementsTables from "../AnnoncementsTables";
import AnnouncementForm from "../../../components/AnnouncementForm/AnnouncementForm";

const Annoncements = () => {
  const [reload, setReload] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleSuccess = () => {
    setReload(!reload);
    setEditData(null);
  };

  return (
    <main className="h-auto">
      <div className="container px-6 mx-auto grid">
        <h2
          className="my-6 text-2xl font-semibold"
          style={{ color: "#10244b" }}
        >
          Annoncements
        </h2>
        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <AnnouncementForm onSuccess={handleSuccess} initialData={editData} />
          <AnnoncementsTables
            reload={reload}
            onEdit={(data) => setEditData(data)}
          />
        </div>
      </div>
    </main>
  );
};

export default Annoncements;
