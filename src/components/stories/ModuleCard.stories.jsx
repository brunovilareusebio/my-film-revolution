import React from "react";
import ModuleCard from "../../ModuleCard";
import { module } from "../../data/modulos";

export default {
  title: "Components/ModuleCard",
  component: ModuleCard
};

export const DespertarDoOlhar = {
  args: {
    module: {
      id: "m1",
      slug: "despertar-olhar-cinematografico",
      title: "Despertar do Olhar Cinematográfico",
      subtitle: "Primeiros passos no cinema com smartphone"
    }
  }
};
