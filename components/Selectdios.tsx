export default function Selectdios({ criterios }: { criterios: string[] }) {
  if (criterios[0] == "PACÍFICO") {
      if (criterios[6] == "MALHUMOR" || criterios[9] == "NOCTURNO") {
        return "PLUTÓN";
      } else {
        if (criterios[5] == "CIUDAD") {
          if (criterios[4] == "TRABAJADOR") {
            return "VULCANO";
          } else {
            return "MERCURIO";
          }
        } else {
          if (criterios[4] == "HOLGAZÁN") {
            return "BACO";
          } else {
            return "CERES";
          }
        }
      }
    } else {
      if (criterios[1] == "ENAMORADIZO") {
        if (criterios[2] == "ESTRATEGA") {
          if (criterios[5] == "CIUDAD") {
            return "JUPITER";
          } else {
            return "NEPTUNO";
          }
        } else {
          if (criterios[3] == "CONFRONTACIÓN") {
            if (criterios[9] == "DIURNO") {
              return "FEBO";
            } else {
              return "MARTE";
            }
          } else {
            return "VENUS";
          }
        }
      } else {
        if (criterios[2] == "ESTRATEGA") {
          return "MINERVA";
        } else {
          return "DIANA";
        }
      }
    }
  }