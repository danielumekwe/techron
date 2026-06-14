import { Anchor, Settings, ShoppingCart, Users, Wrench } from "lucide-react";

export const SERVICE_LINKS = [
  {
    icon: Wrench,
    label: "Engineering & Construction",
    desc: "Mechanical, electrical, civil & structural engineering; concept design, FEED, fabrication, structural steelworks, and pipeline laying.",
    href: "/services/engineering-construction",
  },
  {
    icon: ShoppingCart,
    label: "Procurement & Supply Chain",
    desc: "Global sourcing of oilfield equipment, valves, pumps, piping systems, wellhead tools, and industrial materials with timely delivery.",
    href: "/services/procurement-supply-chain",
  },
  {
    icon: Settings,
    label: "Installation, Inspection & Maintenance",
    desc: "EPCIC, commissioning, integrity management, preventive & corrective maintenance, IMR services, and CMMS-based asset & facility management.",
    href: "/services/installation-maintenance",
  },
  {
    icon: Anchor,
    label: "Subsea & Marine Services",
    desc: "Underwater inspections, ROV operations, diving support, pipeline surveys, vessel supply, crew change, and offshore logistics coordination.",
    href: "/services/subsea-marine",
  },
  {
    icon: Users,
    label: "Manpower Development",
    desc: "Training and supply of certified engineers, technicians, HSE officers, and project managers — scalable to client requirements.",
    href: "/services/manpower-development",
  },
];
