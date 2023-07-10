import React from 'react';

interface Dioses {
  [key: string]: string[];
}

function SeleccionarDios({ criterios }: { criterios: string[] }) {
  const dioses: Dioses = {
    JÚPITER: [
      'PACÍFICO',
      'ENAMORADIZO',
      'ESTRATEGA',
      'NEGOCIACIÓN',
      'HOLGAZÁN',
      'CIUDAD',
      'BUENHUMOR',
      'RACIONAL',
      'JUSTO',
      'DIURNO'
    ],
    JUNO: [
      'PACÍFICO',
      'FIEL',
      'IMPULSIVO',
      'CONFRONTACIÓN',
      'TRABAJADOR',
      'CIUDAD',
      'MALHUMOR',
      'CREATIVO',
      'INJUSTO',
      'DIURNO'
    ],
    MINERVA: [
      'GUERRERO',
      'FIEL',
      'ESTRATEGA',
      'NEGOCIACIÓN',
      'TRABAJADOR',
      'CIUDAD',
      'BUENHUMOR',
      'RACIONAL',
      'JUSTO',
      'DIURNO'
    ],
    VULCANO: [
      'PACÍFICO',
      'FIEL',
      'ESTRATEGA',
      'NEGOCIACIÓN',
      'TRABAJADOR',
      'CAMPO',
      'MALHUMOR',
      'CREATIVO',
      'JUSTO',
      'DIURNO'
    ],
    DIANA: [
      'GUERRERO',
      'FIEL',
      'IMPULSIVO',
      'CONFRONTACIÓN',
      'TRABAJADOR',
      'CAMPO',
      'BUENHUMOR',
      'RACIONAL',
      'INJUSTO',
      'NOCTURNO'
    ],
    FEBO: [
      'PACÍFICO',
      'ENAMORADIZO',
      'IMPULSIVO',
      'NEGOCIACIÓN',
      'HOLGAZÁN',
      'CAMPO',
      'BUENHUMOR',
      'CREATIVO',
      'JUSTO',
      'DIURNO'
    ],
    VENUS: [
      'PACÍFICO',
      'ENAMORADIZO',
      'IMPULSIVO',
      'NEGOCIACIÓN',
      'HOLGAZÁN',
      'CAMPO',
      'BUENHUMOR',
      'CREATIVO',
      'JUSTO',
      'NOCTURNO'
    ],
    CERES: [
      'PACÍFICO',
      'FIEL',
      'IMPULSIVO',
      'NEGOCIACIÓN',
      'TRABAJADOR',
      'CAMPO',
      'BUENHUMOR',
      'RACIONAL',
      'JUSTO',
      'DIURNO'
    ],
    NEPTUNO: [
      'GUERRERO',
      'ENAMORADIZO',
      'ESTRATEGA',
      'CONFRONTACIÓN',
      'TRABAJADOR',
      'CAMPO',
      'BUENHUMOR',
      'RACIONAL'
    ],
    MARTE: [
      'GUERRERO',
      'ENAMORADIZO',
      'IMPULSIVO',
      'CONFRONTACIÓN',
      'TRABAJADOR',
      'CIUDAD',
      'MALHUMOR',
      'RACIONAL',
      'INJUSTO',
      'DIURNO'
    ],
    MERCURIO: [
      'PACÍFICO',
      'FIEL',
      'ESTRATEGA',
      'NEGOCIACIÓN',
      'TRABAJADOR',
      'CIUDAD',
      'BUENHUMOR',
      'RACIONAL',
      'JUSTO',
      'DIURNO'
    ],
    VESTA: [
      'PACÍFICO',
      'FIEL',
      'ESTRATEGA',
      'NEGOCIACIÓN',
      'TRABAJADOR',
      'CIUDAD',
      'BUENHUMOR',
      'RACIONAL',
      'JUSTO',
      'DIURNO'
    ]
  };

  function compararCriterios(atributosDios: string[], criterios: string[]) {
    for (let i = 0; i < atributosDios.length; i++) {
      if (atributosDios[i] !== criterios[i]) {
        return false;
      }
    }
    return true;
  }

  for (const dios in dioses) {
    const atributos = dioses[dios];
    if (compararCriterios(atributos, criterios)) {
      return dios;
    }
  }

  return 'No se encontró ningún dios que coincida con los criterios.';
}

function MyComponent() {
  const criterios = [
    'PACÍFICO',
    'ENAMORADIZO',
    'ESTRATEGA',
    'NEGOCIACIÓN',
    'HOLGAZÁN',
    'CIUDAD',
    'BUENHUMOR',
    'RACIONAL',
    'JUSTO',
    'DIURNO'
  ];
  const nombreDios = SeleccionarDios({ criterios });

  return <div>{nombreDios}</div>;
}

export default MyComponent;