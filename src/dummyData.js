const dummyData = [
  {
    "PREGUNTA": "¿Crees que la Universidad debería ser gratuita?",
    "RESPUESTA": "Creo que la Universidad debería ser gratuita porque habemos muchas personas, incluyéndome a mí, a las que le darín un aoportuniudad de superarse y ser alguien en la vida, demostrando que somos seres humanos que podemos salir adelante"
  },
  {
    "PREGUNTA": "¿Cómo te gustaría que te trataran al salir de prisión?",
    "RESPUESTA": "Como una persona común y corriente, que no me recalquen lo malo que hice ni el por qué lo hice"
  },
  {
    "PREGUNTA": "Si hoy fuera el último día de su vida, ¿qué le gustaría hacer, cómo lo invertiría?",
    "RESPUESTA": "Si hoy fuera el últumo día, de searía compartirlo con mi familia, especialimente con mis hijos"
  },
  {
    "PREGUNTA": "¿Qué haría de Medellín una mejor ciudad?",
    "RESPUESTA": "Ayudar a los habitantes de calle con una resocialización, esto empezaría a cambiar la ciudad"
  },
  {
    "PREGUNTA": "¿Qué piensas sobre el papel del estado en la vida de las personas?",
    "RESPUESTA": "Es precario, ya que mi situación actual lo que hizo la Fiscalía primero fue capturarme y luego hacer campo de investigación"
  },
  {
    "PREGUNTA": "¿Qué hacer cuando todos los días se repiten las mismas cosas que le han daño?",
    "RESPUESTA": "Evitar las cosas que yo sé que me hacen daño"
  },
  {
    "PREGUNTA": "¿Cómo crees que es un buen entorno laboral?",
    "RESPUESTA": "Con un buen equipo de trabajo y una buena comunicación, pero sobre todo y lo más importante es que haya respeto"
  },
  {
    "PREGUNTA": "¿Qué hacer cuando todos los días se repiten las mismas cosas que le han daño?",
    "RESPUESTA": "Hacerse el bobo, porque no se puede uno cerrar en todo lo que pasa acá, que son cosas que no se pueden solucionar"
  },
  {
    "PREGUNTA": "¿Cómo ha transformado la privación de la libertad su visión sobre la vida?",
    "RESPUESTA": "Sé que la vida tiene varias etapas, hay que saberlas llevar. Sé que se debe tratar con madurez, mucho respeto y tolerancia. Que Dios nos bendiga."
  },
  {
    "PREGUNTA": "¿Qué haría de Medellín una mejor ciudad?",
    "RESPUESTA": "Más oportunidades de empelo, estudio y que le den oportunidades a las personas que, de una forma u otra, son profesionales pero que han estado privados de la libertad. Que no les cierren las pueras cuando salen a la sociedad."
  },
  {
    "PREGUNTA": "¿Qué opinas del trabajo informal?",
    "RESPUESTA": "Que es es una forma de sobrevivir, porque al no tener una mejor oportunidad laboral, es nuestra forma de subsistir y satisacer nuestras necesidades báscias, porque el Estado nos tiene en pleno abandono, solo existimos en las campañas."
  },
  {
    "PREGUNTA": "¿Cómo te gustaría que te trataran al salir de prisión?",
    "RESPUESTA": "Con respeto e igualdad"
  },
  {
    "PREGUNTA": "¿Qué cosas de usted ha descubierto, a partir de la experiencia de estar privado de la libertad?",
    "RESPUESTA": "Valorar la vida, a mis seres queridos y sobre todo, valorar la LIBERTAD, que es lo más preciado que tenemos."
  },
  {
    "PREGUNTA": "¿Cuáles son sus principales motivaciones?",
    "RESPUESTA": "Mis hijos, mi familia, mi libertad"
  },
  {
    "PREGUNTA": "¿Cómo se percibe a usted mismo?",
    "RESPUESTA": "Como una persona hiperactiva y colaboradora, con errores y virtudes"
  },
  {
    "PREGUNTA": "¿Qué es la libertad?",
    "RESPUESTA": "Libertad es hacer lo que yo quiero, así sea de corazón o de mente"
  },
  {
    "PREGUNTA": "¿Qué debería tener un niñx para desarrollarse plenamente?",
    "RESPUESTA": "Amor y comprensión"
  },
  {
    "PREGUNTA": "Si hoy fuera el último día de su vida, ¿qué le gustaría hacer, cómo lo invertiría?",
    "RESPUESTA": "Estar junto a mi familia sería mi mejor inversión"
  },
  {
    "PREGUNTA": "¿Cómo ha transformado la privación de la libertad su visión sobre la vida?",
    "RESPUESTA": "Aquí nos volvemos peores y no nos resocializamos"
  },
  {
    "PREGUNTA": "¿Qué debería tener un niñx para desarrollarse plenamente?",
    "RESPUESTA": "Buena convivencia, buena crianza, los cuidados de su madre, buena alimentación, amor y paciencia"
  },
  {
    "PREGUNTA": "¿Cuáles son los barrotes que impiden a los seres humanos vivir en libertad?",
    "RESPUESTA": "Barrotes físicos, mentales y emocionales"
  },
  {
    "PREGUNTA": "¿Qué crees que deberíamos trabajar como sociedad?",
    "RESPUESTA": "El respeto, porque todos lo merecemos"
  },
  {
    "PREGUNTA": "¿Qué opinas del trabajo informal?",
    "RESPUESTA": "Es el modo de buscar cómo sobrevivir con sus negocios"
  },
  {
    "PREGUNTA": "¿Cómo crees que es un buen entorno laboral?",
    "RESPUESTA": "Teniendo un espacio tranquilo, armonioso, donde uno pueda concentrarse en lo que está haciendo y tener en cuenta el disfrutar para que todo salga bien con buenos compañeros y buena música adecuada."
  },
  {
    "PREGUNTA": "¿Qué crees que deberíamos trabajar como sociedad?",
    "RESPUESTA": "Deberíamos trabajar lo que es la humildad, el emprendimiento, dejar tanta discriminación para así crecer como sociedad."
  },
  {
    "PREGUNTA": "¿Crees que la Universidad debería ser gratuita?",
    "RESPUESTA": "Sí, aunque yo no sé leer ni escribir quiero estudiar y cuando salga, poder ir a la Universidad"
  },
  {
    "PREGUNTA": "¿Qué cambiarías en este momento de tu vida?",
    "RESPUESTA": "Cambiaría mi prototipo mental para elevar mi consciencia y para ser maestra reiky"
  },
  {
    "PREGUNTA": "Si se te apareciera un hada madrina y te quisiera conceder un solo deseo, ¿qué le pedirías?",
    "RESPUESTA": "Estar al lado de mi madre y mis hijos"
  },
  {
    "PREGUNTA": "¿De qué manera crees que el arte ha influido en tu vida y en tu proceso estando privadx de la libertad?",
    "RESPUESTA": "El arte ha permeado toda mi existencia, ha sido mi forma de expresión y se convirtió en mi profesión. En mi estadía en Pedregal se ha convertido en mi trabajo y también en mi paz y refugio ante los pensamientos de desesperanza, en la forma como expreso mis deseos y sentimientos y en una herramienta que me permite ser libre al permitirme soñar, crear y reconstruir mi existencia."
  },
  {
    "PREGUNTA": "¿Cómo se vive la relación con la familia que esá afuera?",
    "RESPUESTA": "Es difícil, ya que no contamos con los medios suficientes para sentirnos cercanos, solo un teléfono alámbrico nos permite escucharlos en un tiempo estipulado, aparte de que son costosas las llamadas. El contacto físico se nos imposibilita."
  },
  {
    "PREGUNTA": "¿Cuál es su mayor temor?",
    "RESPUESTA": "La ira de Dios y perder a mi familia"
  },
  {
    "PREGUNTA": "¿Con cuál canción sacaría a bailar a la persona que más quiere?",
    "RESPUESTA": "Los caminos de la vida de Los Diablitos"
  },
  {
    "PREGUNTA": "¿Cree en el sistema carcelario como un esquema de resocialización?",
    "RESPUESTA": "Sí, ya que tengo una experiencia que me ha marcado la vida. Creo que en el sistema porque la justicia viene de Dios y yo creo en su palabra que me prepara para la resocialización"
  },
  {
    "PREGUNTA": "¿Qué haría diferente en su vida?",
    "RESPUESTA": "Buscar más a Dios porque él lo puede todo y siempre está ahí pase lo que nos pase."
  },
  {
    "PREGUNTA": "¿Te gustaría vivir en otro país? ¿Por qué?",
    "RESPUESTA": "No, porque estoy muy bien en el mío. Vive Colombia, viaja por ela. Estoy muy orgullosa de mi Colombia."
  },
  {
    "PREGUNTA": "Si se te apareciera un hada madrina y te quisiera conceder un solo deseo, ¿qué le pedirías?",
    "RESPUESTA": "Saber de mi papá y mi libertad para poder estar con mi hija y mi familia."
  },
  {
    "PREGUNTA": "¿Cómo describirías el barrio soñado?",
    "RESPUESTA": "Sin conflictos, que haya unión, respeto, solidaridad, armonía."
  },
  {
    "PREGUNTA": "¿Qué cambiarías en este momento de tu vida?",
    "RESPUESTA": "El lugar en que me encuentro y los pensamientos negativos"
  },
  {
    "PREGUNTA": "¿Cómo describirías el barrio soñado?",
    "RESPUESTA": "Como una comunidad unida en donde se desarrollen actividades para las personas; que nos podamos ayudar y hacer el bien, pensando siempre en los demás."
  },
  {
    "PREGUNTA": "¿Qué es lo que más añora de la vida fuera?",
    "RESPUESTA": "La salud que no tengo aquí adentro"
  },
  {
    "PREGUNTA": "¿Qué es lo que más le gusta hacer?",
    "RESPUESTA": "Comer, viajar, leer, dibujar y trabajar"
  },
  {
    "PREGUNTA": "¿Cree en el sistema carcelario como un esquema de resocialización?",
    "RESPUESTA": "No, porque el INPEC es un sistema corrupto que pisotea a las internas, creyendo que porque tienen un uniforme pueden venir a violar e irrespetar a las internas del complejo."
  },
  {
    "PREGUNTA": "¿Cómo se vive la relación con la familia que esá afuera?",
    "RESPUESTA": "Mi familia me apoya y es lo mejor de mi vida"
  },
  {
    "PREGUNTA": "¿Con cuál canción sacaría a bailar a la persona que más quiere?",
    "RESPUESTA": "Una bachata de Romeo Santos: Qué dirías esta noche si te robo un besito."
  },
  {
    "PREGUNTA": "¿Cuál es su mayor temor?",
    "RESPUESTA": "Mi mayor temos es hacerle daño a mis hijos y a mi familia o volver a este lugar. Le pido a mi Dios mucha fuerza y no sentir temor de perder a mis seres queridos. Dios los bendiga a todos."
  },
  {
    "PREGUNTA": "¿Te gustaría vivir en otro país? ¿Por qué?",
    "RESPUESTA": "Sí, para cambiar de ambiente"
  },
  {
    "PREGUNTA": "¿Qué haría diferente en su vida?",
    "RESPUESTA": "Sería igual, como siempre"
  },
  {
    "PREGUNTA": "¿Qué es lo que más añora de la vida fuera?",
    "RESPUESTA": "A mis niñas, compartir con ellas todo lo que estas rejas me han quitado y darles todo mi tiempo. Ellas son mi vida."
  }
]

export default dummyData