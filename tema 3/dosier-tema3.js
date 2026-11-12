
// ---------- Dosier «Cazadores de paisajes» y vocabulario imprescindible ----------
window.TEMA3.imprescindibles = ["meteorización", "erosión", "transporte", "sedimentación", "agente geológico", "erosión diferencial",
  "aguas de arroyada", "cárcava", "torrente", "rambla", "cono de deyección", "valle en V", "meandro", "llanura aluvial", "delta", "estuario",
  "acuífero", "nivel freático", "manantial / fuente", "karst", "lapiaz", "dolina", "estalactita", "estalagmita",
  "glaciar", "circo glaciar", "valle en U (artesa)", "morrena", "acantilado", "playa", "flecha litoral", "corriente de deriva litoral",
  "duna", "deflación", "desertificación", "riesgo natural", "peligrosidad", "vulnerabilidad", "exposición",
  "previsión", "prevención", "predicción", "desprendimiento", "deslizamiento"];

window.TEMA3.dosier = {
  idea: { es: "Cada agente modela el relieve y, cuando actúa donde vivimos, genera un riesgo: AGENTE → FORMA → PROCESO → RIESGO → MEDIDA.",
          en: "Each agent shapes the land and, where people live, creates a hazard: AGENT → LANDFORM → PROCESS → HAZARD → MEASURE." },
  tarea: { es: "Por parejas, buscad y fotografiad formas del relieve y riesgos geológicos, analizad cada foto con la ficha y situadlas en el mapa digital de la clase. Al final presentaréis vuestro mapa y vuestra mejor ficha (3 minutos).",
           en: "In pairs, find and photograph landforms and geological hazards, analyse each photo with the card and pin them on the class digital map. At the end you will present your map and your best card (3 minutes)." },
  requisitos: [
    { es: "10 fichas como mínimo, con al menos 1 de cada agente: aguas superficiales, aguas subterráneas (karst), hielo, mar, viento y gravedad.", en: "At least 10 cards, with at least 1 for each agent: running water, groundwater (karst), ice, sea, wind and gravity." },
    { es: "3 fichas de riesgos (inundación, desprendimiento, erosión costera, hundimiento, desertificación…).", en: "3 hazard cards (flood, rockfall, coastal erosion, collapse, desertification…)." },
    { es: "3 fotos propias como mínimo. Las de internet, siempre con la fuente.", en: "At least 3 of your own photos. Internet photos must always show their source." },
    { es: "Preferiblemente de Andalucía. Si una forma no existe aquí (un glaciar actual), podéis usar otra foto.", en: "Preferably from Andalusia. If a landform doesn't exist here (a present‑day glacier), you can use another photo." },
    { es: "Cada foto, subida al mapa Padlet de la clase (enlace y QR en Classroom): título «Nº. Título – vuestros nombres», la ficha en el texto y color 🟢 forma · 🔴 riesgo · 🔵 medida.", en: "Every photo posted on the class Padlet map (link and QR on Classroom): title “No. Title – your names”, the card in the text and colour 🟢 landform · 🔴 hazard · 🔵 measure." },
    { es: "🔒 Solo paisajes: sin caras ni matrículas, sin apellidos, y nunca la ubicación de tu casa (basta el municipio o el paraje).", en: "🔒 Landscapes only: no faces or number plates, no surnames, and never your home location (the town or area is enough)." }
  ],
  plazos: [
    { f: { es: "Viernes 27 nov", en: "Fri 27 Nov" }, q: { es: "Entrega parcial 1", en: "Draft 1" }, d: { es: "3 fichas de aguas superficiales + 1 de riesgo de inundación.", en: "3 running‑water cards + 1 flood‑hazard card." } },
    { f: { es: "Viernes 4 dic", en: "Fri 4 Dec" }, q: { es: "Entrega parcial 2", en: "Draft 2" }, d: { es: "+ 2 fichas de karst + 2 del mar. Corregir lo señalado.", en: "+ 2 karst cards + 2 sea cards. Fix the feedback." } },
    { f: { es: "Lunes 14 dic", en: "Mon 14 Dec" }, q: { es: "Entrega final", en: "Final hand‑in" }, d: { es: "Dosier completo (mínimo 10 fichas) + todas las fotos en el Padlet.", en: "Full dossier (at least 10 cards) + all photos on the Padlet." } },
    { f: { es: "Miércoles 16 dic", en: "Wed 16 Dec" }, q: { es: "Presentación", en: "Presentation" }, d: { es: "3 minutos por pareja: vuestras fotos del Padlet y la mejor ficha.", en: "3 minutes per pair: your Padlet photos and your best card." } },
    { f: { es: "Viernes 18 dic", en: "Fri 18 Dec" }, q: { es: "Examen", en: "Test" }, d: { es: "Visu con ficha, imagen muda, caso de riesgo y preguntas cortas.", en: "Photo ID with the card, a diagram to label, a hazard case and short questions." } }
  ],
  ejemplo: [
    [{ es: "Título", en: "Title" }, { es: "Las piedras del Torcal", en: "The rocks of El Torcal" }],
    [{ es: "Lugar", en: "Place" }, { es: "Torcal de Antequera (Málaga)", en: "El Torcal de Antequera (Málaga)" }],
    [{ es: "Foto", en: "Photo" }, { es: "Propia (excursión de 2º ESO)", en: "Own photo (school trip)" }],
    [{ es: "1. Agente", en: "1. Agent" }, { es: "Aguas subterráneas (agua de lluvia con CO₂)", en: "Groundwater (rainwater with CO₂)" }],
    [{ es: "2. Forma", en: "2. Landform" }, { es: "Lapiaz: bloques de caliza con surcos y grietas", en: "Limestone pavement: limestone blocks with grooves and cracks" }],
    [{ es: "3. Proceso", en: "3. Process" }, { es: "Erosión (disolución de la caliza)", en: "Erosion (limestone dissolving)" }],
    [{ es: "4. Modelado", en: "4. Landscape type" }, { es: "Kárstico", en: "Karst" }],
    [{ es: "5. Riesgo", en: "5. Hazard" }, { es: "Hundimientos del terreno (colapsos)", en: "Ground collapse (sinkholes)" }],
    [{ es: "6. Medida", en: "6. Measure" }, { es: "Prevención: estudiar el subsuelo antes de construir", en: "Prevention: study the ground before building" }],
    [{ es: "Explicación", en: "Explanation" }, { es: "El agua de lluvia con CO₂ disuelve la caliza siguiendo las grietas y deja bloques separados por pasillos y surcos. Bajo tierra la disolución forma cuevas que pueden hundirse.",
                                                en: "Rainwater with CO₂ dissolves limestone along the cracks, leaving blocks separated by corridors and grooves. Underground, dissolution forms caves that can collapse." }]
  ],
  ayuda: [
    { a: { es: "Aguas superficiales", en: "Running water" }, f: { es: "Cárcavas, chimeneas de hadas, cono de deyección, valle en V, desfiladero, meandro, llanura aluvial, delta, estuario", en: "Gullies, hoodoos, alluvial fan, V‑shaped valley, gorge, meander, floodplain, delta, estuary" }, r: { es: "Inundaciones, ramblas, DANA", en: "Floods, dry river beds, DANA storms" } },
    { a: { es: "Aguas subterráneas", en: "Groundwater" }, f: { es: "Lapiaz, dolina, sima, cueva, estalactitas, estalagmitas, manantial", en: "Limestone pavement, doline, pothole, cave, stalactites, stalagmites, spring" }, r: { es: "Colapsos, subsidencia, sobreexplotación de acuíferos", en: "Collapse, subsidence, over‑pumping of aquifers" } },
    { a: { es: "Hielo", en: "Ice" }, f: { es: "Circo y laguna glaciar, valle en U, morrena (Sierra Nevada)", en: "Cirque and glacial lake, U‑shaped valley, moraine (Sierra Nevada)" }, r: { es: "Pérdida de glaciares por el cambio climático", en: "Glacier loss due to climate change" } },
    { a: { es: "Mar", en: "Sea" }, f: { es: "Acantilado, rasa, arco, islote, playa, barra, flecha", en: "Cliff, wave‑cut platform, arch, stack, beach, bar, spit" }, r: { es: "Erosión costera, regresión de playas, temporales", en: "Coastal erosion, beach loss, storms" } },
    { a: { es: "Viento", en: "Wind" }, f: { es: "Dunas, roca fungiforme, taffoni", en: "Dunes, mushroom rock, tafoni" }, r: { es: "Desertificación, avance de dunas", en: "Desertification, moving dunes" } },
    { a: { es: "Gravedad", en: "Gravity" }, f: { es: "Canchales, desprendimientos, deslizamientos", en: "Scree, rockfalls, landslides" }, r: { es: "Caída de rocas en carreteras y pueblos", en: "Falling rocks on roads and villages" } }
  ],
  rubrica: {
    niveles: [{ es: "Excelente (4)", en: "Excellent (4)" }, { es: "Bien (3)", en: "Good (3)" }, { es: "Suficiente (2)", en: "Pass (2)" }, { es: "Insuficiente (1)", en: "Not yet (1)" }],
    filas: [
      { c: { es: "Identificación del relieve (1.1 · 6.2)", en: "Identifying landforms (1.1 · 6.2)" },
        n: [{ es: "Agente, forma, proceso y modelado correctos en todas las fichas, bien explicados.", en: "Agent, landform, process and type correct on every card, well explained." },
            { es: "Correctos en casi todas; alguna explicación breve.", en: "Correct on almost all; some short explanations." },
            { es: "Varios errores en formas o procesos.", en: "Several mistakes in landforms or processes." },
            { es: "Muchos errores o fichas incompletas.", en: "Many mistakes or incomplete cards." }] },
      { c: { es: "Riesgos y medidas (5.1)", en: "Hazards and measures (5.1)" },
        n: [{ es: "Cada riesgo bien relacionado con su agente y con una medida bien clasificada.", en: "Each hazard linked to its agent, with a correctly classified measure." },
            { es: "Riesgos correctos; alguna medida mal clasificada.", en: "Correct hazards; one measure misclassified." },
            { es: "Riesgos poco relacionados con el agente.", en: "Hazards loosely linked to the agent." },
            { es: "Faltan los riesgos o son incorrectos.", en: "Hazards missing or wrong." }] },
      { c: { es: "Fotos y fuentes (2.1)", en: "Photos and sources (2.1)" },
        n: [{ es: "≥ 3 fotos propias; todas las fuentes citadas.", en: "≥ 3 own photos; all sources credited." },
            { es: "3 fotos propias; casi todas las fuentes.", en: "3 own photos; almost all sources." },
            { es: "Menos de 3 propias o faltan fuentes.", en: "Fewer than 3 own photos or missing sources." },
            { es: "Sin fotos propias ni fuentes.", en: "No own photos or sources." }] },
      { c: { es: "Mapa Padlet (6.2)", en: "Padlet map (6.2)" },
        n: [{ es: "Todas las fotos bien situadas, con título, ficha y color correcto.", en: "All photos well placed, with title, card and the right colour." },
            { es: "Completo, con algún error de localización o de color.", en: "Complete, with some location or colour errors." },
            { es: "Faltan fotos en el mapa.", en: "Some photos missing from the map." },
            { es: "No ha subido fotos al mapa.", en: "No photos posted on the map." }] },
      { c: { es: "Presentación oral (1.2)", en: "Oral presentation (1.2)" },
        n: [{ es: "Clara, con vocabulario científico y sin leer.", en: "Clear, with scientific vocabulary, not read aloud." },
            { es: "Clara, con algún apoyo en la lectura.", en: "Clear, with some reading." },
            { es: "Lee casi todo o usa poco vocabulario científico.", en: "Reads most of it or uses little scientific vocabulary." },
            { es: "No se entiende o no se presenta.", en: "Unclear or not presented." }] },
      { c: { es: "Trabajo en pareja y plazos", en: "Pair work and deadlines" },
        n: [{ es: "Entregas a tiempo; trabajo repartido.", en: "On time; work shared." },
            { es: "Un retraso o reparto desigual.", en: "One delay or uneven sharing." },
            { es: "Varios retrasos.", en: "Several delays." },
            { es: "No entrega a tiempo.", en: "Not handed in on time." }] }
    ]
  }
};
