import { useState } from "react";
import type { Champ } from "../types/Champ";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import * as Sentry from "@sentry/react";
import { Button } from "react-bootstrap";

const AddChamp = () => {
  const navigate = useNavigate();
  const [champ, setChamp] = useState<Champ>({
    name: "",
    role: "",
    lane: "",
    difficulty: 0,
    blue_essence: 0,
    damage_type: "",
    images: [],
    description: "",
  });

  const submit = () => {
    apiClient
      .post("/champions", champ)
      .then(() => {
        toast.success("Sikeres hozzáadás");
        navigate("/");
      })
      .catch((err) => {
        Sentry.captureException(err);
        toast.error("Sikertelen hozzáadás");
      });
  };
  return (
    <>
    <div>
      <input
        type="text"
        value={champ.name}
        placeholder="név"
        onChange={(e) => setChamp({ ...champ, name: e.target.value })}
      />
      <input
        type="text"
        value={champ.role}
        placeholder="role"
        onChange={(e) => setChamp({ ...champ, role: e.target.value })}
      />
      <input
        type="text"
        value={champ.lane}
        placeholder="lane"
        onChange={(e) => setChamp({ ...champ, lane: e.target.value })}
      />
       <input
        type="number"
        value={champ.difficulty}
        placeholder="difficulty"
        onChange={(e) => setChamp({ ...champ, difficulty: Number(e.target.value) })}
      />
       <input
        type="number"
        value={champ.blue_essence}
        placeholder="blue_essence"
        onChange={(e) => setChamp({ ...champ, blue_essence: Number(e.target.value) })}
      />
       <input
        type="text"
        value={champ.damage_type}
        placeholder="damage_type"
        onChange={(e) => setChamp({ ...champ, damage_type: e.target.value })}
      />
       <input
        type="text"
        value={champ.images}
        placeholder="images"
        onChange={(e) => setChamp({ ...champ, images: e.target.value.split(",") })}
      />
       <input
        type="text"
        value={champ.description}
        placeholder="leírás"
        onChange={(e) => setChamp({ ...champ, description: e.target.value })}
      />
      </div>
      <Button onClick={submit}>Hozzáadás</Button>

    </>
  );
};
export default AddChamp;
