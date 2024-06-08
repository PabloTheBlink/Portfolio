export const ALIGN = {
  LEFT: 1,
  CENTER: 2,
  RIGHT: 3,
};

export const ITEMS = {
  inicio: [
    {
      title: "¿Quién soy?",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>Mi experiencia incluye dominar tecnologías como Java, PHP, SQL y la creación de APIs. Además, he trabajado con frameworks líderes en el mercado, como SpringBoot, Laravel y Angular, entre otros.</p>
        <p>Pero más allá de mis habilidades técnicas, lo que realmente me distingue es mi capacidad para adaptarme rápidamente a nuevos entornos y desafíos. Soy un solucionador de problemas proactivo y orientado a resultados, capaz de ofrecer soluciones tangibles en cualquier situación. Soy un profesional independiente y resolutivo, pero también disfruto colaborar en equipo para alcanzar objetivos y brindar servicios de la más alta calidad.</p>
      `,
      images: ["./assets/img/developer-1.webp"],
    },
    {
      title: "¿Qué busco?",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>Estoy buscando oportunidades emocionantes y desafiantes que me permitan seguir creciendo profesionalmente y contribuir al éxito de proyectos innovadores. Me apasiona trabajar en un entorno dinámico y colaborativo donde pueda aplicar mis habilidades y conocimientos para enfrentar nuevos desafíos y alcanzar resultados excepcionales.</p>
        <p>Estoy abierto a oportunidades de trabajo tanto como desarrollador fullstack en proyectos desafiantes, como en roles de liderazgo donde pueda aplicar mi experiencia en la gestión de equipos y proyectos tecnológicos.</p>
      `,
      links: [
        {
          title: "LinkedIn",
          href: "https://www.linkedin.com/in/pablo-mart%C3%ADnez-san-jos%C3%A9-9bb24215a",
        },
      ],
      images: ["./assets/img/developer-2.webp"],
    },
    {
      title: "Aptitudes",
      align: ALIGN.CENTER,
      content: /* HTML */ `
        <div>
          <div>
            <p>Desarrollo fullstack</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="95%">
              <div style="width: 95%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Liderazgo de equipos</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="85%">
              <div style="width: 85%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Visión artificial</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="80%">
              <div style="width: 80%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Desarrollo web</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="90%">
              <div style="width: 90%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Front-End y Back-End</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="100%">
              <div style="width: 100%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Desarrollo de aplicaciones móviles (Android e iOS)</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="92%">
              <div style="width: 92%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Desarrollo multiplataforma</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="88%">
              <div style="width: 88%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Administración de sistemas</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="84%">
              <div style="width: 84%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Atención al cliente</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="89%">
              <div style="width: 89%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Trabajo bajo presión</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="93%">
              <div style="width: 93%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Administración pública</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="82%">
              <div style="width: 82%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
          <div>
            <p>Gestión de proyectos</p>
            <div style="background-color: #e0e0e0; border-radius: 4px;" data-tooltip="97%">
              <div style="width: 97%; background-color: var(--primary-color); height: 24px; border-radius: 4px;"></div>
            </div>
          </div>
        </div>
      `,
    },
  ],
  experiencia: [
    {
      title: "+6 Años de experiencia",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>Tengo una sólida experiencia de 6 años trabajando en el campo de la tecnología, lo que me ha permitido adquirir un profundo conocimiento en diversas áreas. Durante estos años, he tenido la oportunidad de enfrentarme a una amplia gama de proyectos, desde pequeñas iniciativas hasta grandes desarrollos empresariales.</p>
        <p>Mi trayectoria profesional me ha brindado la oportunidad de trabajar en equipos multidisciplinarios, lo que me ha permitido aprender y crecer constantemente. Estoy comprometido con la mejora continua y me esfuerzo por mantenerme actualizado con las últimas tendencias y tecnologías en el campo.</p>
        <p>Con cada proyecto, he ganado experiencia valiosa y he perfeccionado mis habilidades técnicas y blandas. Estoy ansioso por seguir enfrentando nuevos desafíos y contribuir al éxito de futuros proyectos.</p>
      `,
    },
    {
      title: "Administración pública",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>Con una sólida experiencia en el desarrollo de soluciones para la administración pública, he trabajado en proyectos que abarcan diferentes niveles de gobierno y organismos públicos. Mi enfoque se centra en comprender las necesidades específicas de cada cliente y desarrollar soluciones personalizadas que cumplan con los estándares y regulaciones del sector.</p>
        <p>Desde sistemas de gestión interna hasta plataformas de servicio ciudadano, he participado en proyectos que buscan mejorar la eficiencia, la transparencia y la accesibilidad de los servicios gubernamentales. Estoy comprometido con contribuir al bienestar de la sociedad a través de la innovación y la tecnología en el ámbito público.</p>
        <p>Me enorgullece haber colaborado en iniciativas que tienen un impacto positivo en la comunidad y estoy emocionado por seguir trabajando en proyectos que promuevan el progreso y el desarrollo sostenible.</p>
      `,
    },
    {
      title: "Proyectos privados",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>Con una amplia experiencia en proyectos privados, he tenido la oportunidad de trabajar con empresas de diferentes sectores y tamaños. Desde startups emergentes hasta grandes corporaciones, he colaborado en el desarrollo de soluciones innovadoras que impulsan el crecimiento y la competitividad.</p>
        <p>Mi enfoque se centra en comprender las necesidades específicas de cada cliente y ofrecer soluciones a medida que satisfagan sus objetivos comerciales y tecnológicos. He participado en proyectos de desarrollo de software, implementación de sistemas, consultoría tecnológica y mucho más.</p>
        <p>Estoy comprometido con ofrecer resultados excepcionales y crear relaciones sólidas con mis clientes basadas en la confianza, la transparencia y la colaboración. Estoy emocionado por seguir trabajando en proyectos desafiantes y contribuir al éxito de las empresas con las que colaboro.</p>
      `,
    },
    {
      title: "Visión artificial",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>La visión artificial es un campo apasionante en el que he adquirido experiencia significativa. He trabajado en proyectos que involucran el desarrollo e implementación de sistemas de visión artificial para una variedad de aplicaciones, incluyendo reconocimiento de objetos, seguimiento de movimiento y análisis de imágenes.</p>
        <p>Mi experiencia en visión artificial abarca desde algoritmos de procesamiento de imágenes hasta el desarrollo de aplicaciones prácticas que utilizan técnicas avanzadas de visión por computadora. Estoy entusiasmado por seguir explorando las posibilidades de esta tecnología y aplicar mis conocimientos en proyectos innovadores.</p>
        <p>Creo firmemente en el potencial transformador de la visión artificial para mejorar la eficiencia, la precisión y la automatización en una amplia gama de industrias. Estoy comprometido con seguir aprendiendo y contribuir al avance de esta emocionante área de la tecnología.</p>
      `,
    },
    {
      title: "Desarrollo web",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>El desarrollo web es una de mis pasiones, y he acumulado una amplia experiencia en este campo a lo largo de los años. Desde la creación de sitios web estáticos hasta aplicaciones web dinámicas y complejas, he trabajado en una variedad de proyectos que abarcan diferentes tecnologías y plataformas.</p>
        <p>Mi enfoque se centra en crear experiencias de usuario excepcionales y soluciones tecnológicas sólidas que cumplan con los objetivos del cliente. Estoy familiarizado con una amplia gama de herramientas y frameworks de desarrollo web y estoy comprometido con seguir aprendiendo y adaptándome a las últimas tendencias.</p>
        <p>Estoy emocionado por seguir explorando las posibilidades del desarrollo web y participar en proyectos innovadores que impulsen la evolución de la web y mejoren la experiencia de los usuarios en línea.</p>
      `,
    },
    {
      title: "Front-End",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>Como desarrollador Front-End, me especializo en la creación de interfaces de usuario atractivas y funcionales que brinden una experiencia de usuario excepcional. Tengo experiencia en el desarrollo de interfaces de usuario utilizando tecnologías como HTML, CSS y JavaScript, así como en el uso de frameworks y bibliotecas modernas como React.js y Vue.js.</p>
        <p>Mi enfoque se centra en comprender las necesidades y expectativas del usuario y traducirlas en diseños y funcionalidades intuitivas y efectivas. Estoy comprometido con la creación de interfaces de usuario accesibles, receptivas y compatibles con una amplia gama de dispositivos y navegadores.</p>
        <p>Estoy emocionado por seguir explorando las últimas tendencias y técnicas en el desarrollo Front-End y participar en proyectos que desafíen mis habilidades y me permitan seguir creciendo como profesional.</p>
      `,
    },
    {
      title: "Back-End",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>El desarrollo Back-End es fundamental para el funcionamiento y la robustez de cualquier aplicación web o sistema de software. Como desarrollador Back-End, tengo experiencia en la creación de servidores, bases de datos y lógica de negocios que impulsan la funcionalidad y el rendimiento de las aplicaciones.</p>
        <p>Mi experiencia incluye el desarrollo de API RESTful, la gestión de bases de datos relacionales y no relacionales, y la implementación de medidas de seguridad para proteger los datos del usuario. Estoy comprometido con la creación de sistemas escalables, seguros y eficientes que satisfagan las necesidades del cliente y los usuarios finales.</p>
        <p>Estoy emocionado por seguir explorando nuevas tecnologías y mejores prácticas en el desarrollo Back-End y participar en proyectos desafiantes que me permitan aplicar y expandir mis conocimientos en este campo.</p>
      `,
    },
    {
      title: "Android",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>El desarrollo de aplicaciones para la plataforma Android es una de mis áreas de especialización. He desarrollado una variedad de aplicaciones para dispositivos Android, desde aplicaciones de consumo hasta aplicaciones empresariales y de productividad.</p>
        <p>Mi experiencia incluye el diseño de interfaces de usuario intuitivas y atractivas, la integración con servicios en la nube, y la optimización del rendimiento y la eficiencia de las aplicaciones. Estoy comprometido con seguir aprendiendo y adaptándome a las últimas tecnologías y prácticas recomendadas en el desarrollo de aplicaciones Android.</p>
        <p>Estoy emocionado por seguir explorando las posibilidades del desarrollo de aplicaciones Android y participar en proyectos que me desafíen y me permitan seguir creciendo como desarrollador móvil.</p>
      `,
    },
    {
      title: "iOS",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>El desarrollo de aplicaciones para dispositivos iOS es otra de mis áreas de experiencia. He creado una variedad de aplicaciones para iPhone, iPad y otros dispositivos de Apple, abarcando diferentes categorías y sectores de la industria.</p>
        <p>Mi enfoque se centra en crear aplicaciones iOS que sean intuitivas, elegantes y fáciles de usar, manteniendo al mismo tiempo los estándares de rendimiento y calidad de Apple. Estoy comprometido con seguir aprendiendo y adaptándome a las últimas tecnologías y pautas de diseño de iOS.</p>
        <p>Estoy emocionado por seguir explorando las posibilidades del desarrollo de aplicaciones iOS y participar en proyectos que me desafíen y me permitan seguir creciendo como desarrollador de iOS.</p>
      `,
    },
    {
      title: "Multiplataforma",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>El desarrollo multiplataforma es una área en la que tengo experiencia y habilidades sólidas. He creado aplicaciones que se ejecutan en múltiples plataformas, incluyendo web, móvil y escritorio, utilizando frameworks y herramientas que permiten la creación de aplicaciones multiplataforma.</p>
        <p>Mi enfoque se centra en maximizar la reutilización de código y recursos, mientras se proporciona una experiencia de usuario coherente en todas las plataformas. Estoy comprometido con seguir explorando las últimas tecnologías y mejores prácticas en el desarrollo multiplataforma y participar en proyectos que me desafíen y me permitan seguir creciendo como desarrollador.</p>
        <p>Estoy emocionado por seguir explorando las posibilidades del desarrollo multiplataforma y contribuir al éxito de proyectos que buscan llegar a una audiencia diversa a través de diferentes dispositivos y plataformas.</p>
      `,
    },
    {
      title: "Sistemas",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>El diseño, la implementación y el mantenimiento de sistemas informáticos son fundamentales para garantizar el funcionamiento eficiente y confiable de cualquier organización. Como especialista en sistemas, tengo experiencia en todas las etapas del ciclo de vida de desarrollo de sistemas, desde la planificación y el diseño hasta la implementación y la optimización.</p>
        <p>He trabajado en una variedad de proyectos de sistemas, incluyendo la configuración de servidores, la gestión de redes, la seguridad de la información y la implementación de soluciones de almacenamiento y respaldo. Estoy comprometido con la creación de sistemas seguros, escalables y de alto rendimiento que satisfagan las necesidades del cliente y los usuarios finales.</p>
        <p>Estoy emocionado por seguir explorando nuevas tecnologías y mejores prácticas en el campo de los sistemas informáticos y participar en proyectos que me desafíen y me permitan aplicar y expandir mis conocimientos en este campo.</p>
      `,
    },
    {
      title: "Líder de Equipo",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>La capacidad de liderazgo es fundamental para dirigir equipos hacia el éxito y alcanzar objetivos comunes. Como líder de equipo, tengo experiencia en inspirar, motivar y guiar a otros hacia el logro de resultados excepcionales.</p>
        <p>Mi enfoque se centra en la comunicación efectiva, la delegación de tareas, y el desarrollo personal y profesional de los miembros del equipo. He liderado equipos multidisciplinarios en proyectos desafiantes, fomentando un ambiente de trabajo colaborativo, inclusivo y orientado a resultados.</p>
        <p>Estoy comprometido con crear un ambiente de trabajo positivo y productivo donde cada miembro del equipo se sienta valorado y motivado para alcanzar su máximo potencial. Estoy emocionado por seguir liderando equipos y contribuir al crecimiento y éxito de los proyectos y organizaciones en los que participo.</p>
      `,
    },
    {
      title: "Equipo de trabajo",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>El trabajo en equipo es esencial para el éxito de cualquier proyecto, y tengo una sólida experiencia en colaborar con equipos multidisciplinarios para alcanzar objetivos comunes. He trabajado en una variedad de entornos y culturas empresariales, lo que me ha permitido adaptarme y contribuir eficazmente a diferentes equipos de trabajo.</p>
        <p>Mi enfoque se centra en la comunicación abierta, la colaboración y el respeto mutuo entre los miembros del equipo. Estoy comprometido con la construcción de relaciones sólidas y la creación de un ambiente de trabajo positivo y productivo.</p>
        <p>Estoy emocionado por seguir trabajando en equipos diversos y participar en proyectos desafiantes que me permitan colaborar con otros profesionales talentosos y alcanzar resultados excepcionales juntos.</p>
      `,
    },
    {
      title: "Atención al cliente",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>La atención al cliente es fundamental para el éxito de cualquier negocio, y tengo una sólida experiencia en proporcionar un servicio excepcional a los clientes. He trabajado en una variedad de roles que requieren interacción directa con los clientes, desde soporte técnico hasta gestión de cuentas y ventas.</p>
        <p>Mi enfoque se centra en comprender las necesidades y expectativas del cliente y proporcionar soluciones efectivas y personalizadas que satisfagan sus necesidades. Estoy comprometido con brindar un servicio al cliente de alta calidad que genere confianza, fidelidad y satisfacción.</p>
        <p>Estoy emocionado por seguir interactuando con los clientes y contribuir al éxito de las empresas a través de un excelente servicio al cliente.</p>
      `,
    },
    {
      title: "Trabajo bajo presión",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>El trabajo bajo presión es una habilidad fundamental en el mundo laboral actual, y tengo experiencia en manejar situaciones desafiantes y demandantes de manera efectiva. He trabajado en proyectos con plazos ajustados, presupuestos limitados y requisitos cambiantes, y he demostrado mi capacidad para mantener la calma y el enfoque en situaciones de alta presión.</p>
        <p>Mi enfoque se centra en la organización, la priorización y la gestión eficiente del tiempo para cumplir con los objetivos y entregables del proyecto. Estoy comprometido con mantener altos estándares de calidad y rendimiento, incluso en condiciones de trabajo difíciles.</p>
        <p>Estoy emocionado por seguir enfrentando nuevos desafíos y demostrar mi capacidad para trabajar bajo presión de manera efectiva y exitosa.</p>
      `,
    },
  ],
  proyectos: [
    {
      title: "FormJS",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>FormJS es una librería ligera de JavaScript diseñada para simplificar la validación y gestión de formularios en aplicaciones web. Esta librería ofrece una API simple y eficiente que permite agregar fácilmente validaciones a los campos de formulario y validar todo el formulario con facilidad.</p>
        <p>FormJS facilita la obtención de los valores del formulario como un objeto JavaScript normal, lo que simplifica el procesamiento y envío de datos.</p>
        <p>FormJS es una herramienta útil para cualquier proyecto web que requiera formularios interactivos y validaciones de datos. Su facilidad de uso y su tamaño reducido lo hacen ideal para integrarse en aplicaciones web modernas y mejorar la gestión de formularios de manera eficiente.</p>
      `,
      links: [
        {
          title: "GitHub",
          href: "https://github.com/PabloTheBlink/FormJS",
        },
        {
          title: "Devetty CDN",
          href: "https://cdn.devetty.es/FormJS/js",
        },
        {
          title: "JsDelivr CDN",
          href: "https://cdn.jsdelivr.net/gh/pablotheblink/FormJS/js/FormJS.min.js",
        },
      ],
      code: /* JAVASCRIPT */ `
    const form = Form({
      campo1: null,
      campo2: null
    });

    form.campo1.setRequired(true);

    if (form.validate()) {
      // OK
    } else {
      // KO
    }

    const formData = form.values();
    console.log("Valores del formulario:", formData);
      `,
    },
    {
      title: "ScopeJS",
      align: ALIGN.CENTER,
      images: ["./assets/img/scopejs-speed-test.webp"],
      content: /* HTML */ `
        <p>ScopeJS es una librería sencilla que permite crear componentes reactivos en JavaScript vanilla. Con ScopeJS, puedes desarrollar aplicaciones web con una arquitectura basada en componentes, lo que facilita la organización y mantenimiento del código.</p>
        <p>ScopeJS ofrece una API simple para la creación de componentes reutilizables. El componente básico se define utilizando la función Component, que acepta un objeto de configuración con opciones como el nombre de la etiqueta HTML asociada al componente, un controlador para la lógica del componente y una función de renderizado.</p>
        <br />
        <counter></counter>
        <p style="text-align: center; margin-top: 2rem">Ejemplo de componente sencillo en ScopeJS, con máximo rendimiento, mínimos cambios en el DOM (F12). Saca tus propias conclusiones. <a class="color-white" style="text-decoration: underline" href="https://dink.devetty.es/22b9a0d3-b3a4-408f-84c8-95b849fa7bfa" target="_blank">Código aquí</a></p>
        <p style="margin-top: 2rem; text-align: center; text-decoration: underline; font-weight: bold">Esta web esta realizada con esta tecnología</p>
      `,
      links: [
        {
          title: "GitHub",
          href: "https://github.com/PabloTheBlink/ScopeJS",
        },
        {
          title: "Devetty CDN",
          href: "https://cdn.devetty.es/ScopeJS/js",
        },
        {
          title: "JsDelivr CDN",
          href: "https://cdn.jsdelivr.net/gh/pablotheblink/ScopeJS/js/StateJS.min.js",
        },
      ],
    },
    {
      title: "StateJS",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>StateJS es una biblioteca que proporciona una implementación sencilla para gestionar el estado en JavaScript. Esta herramienta permite crear y manipular variables de estado de forma eficiente, lo que facilita el seguimiento y actualización del estado en aplicaciones web.</p>
        <p>La función principal de StateJS permite obtener y establecer valores de estado, así como escuchar cambios en estos valores para ejecutar funciones de devolución de llamada. Esto es útil para crear aplicaciones interactivas y reactivas, donde los cambios en el estado deben reflejarse automáticamente en la interfaz de usuario.</p>
        <p>Además, StateJS es ligera y fácil de integrar, lo que la hace adecuada para cualquier proyecto que requiera una gestión de estado sencilla pero poderosa. Su API clara y concisa permite a los desarrolladores implementar rápidamente soluciones de estado sin sobrecargar sus aplicaciones.</p>
      `,
      links: [
        {
          title: "GitHub",
          href: "https://github.com/PabloTheBlink/StateJS",
        },
        ,
        {
          title: "Devetty CDN",
          href: "https://cdn.devetty.es/StateJS/js",
        },
        {
          title: "JsDelivr CDN",
          href: "https://cdn.jsdelivr.net/gh/pablotheblink/StateJS/js/StateJS.min.js",
        },
      ],
      code: /* JAVASCRIPT */ `
    // variable global
    const counter = State(0);
    setInterval(() => {
      counter.set(counter.get() + 1)
    }, 1000);
    
    // en cualquier otro controlador
    const listener = counter.listen((old_value, new_value) => {
      console.log({ old_value, new_value })
    });
    
    // Eliminar oyente
    counter.unlisten(listener);
      `,
    },
    {
      title: "Planner",
      align: ALIGN.CENTER,
      images: ["./assets/img/planner.webp"],
      content: /* HTML */ `
        <p>Planner es un planificador de tareas que utiliza inteligencia artificial para ayudarte a organizar tu tiempo de manera más eficiente.</p>
        <p>Puedes crear listas de tareas, personales o proyectos, y el sistema de inteligencia artificial te proporcionará sugerencias personalizadas sobre cómo gestionar tu tiempo de la mejor manera.</p>
        <p>Para probar Planner y mejorar tu productividad, visita la aplicación web.</p>
      `,
      links: [
        {
          title: "Aplicación Web",
          href: "https://planner.devetty.es",
        },
      ],
    },
    {
      title: "Chatbot",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>Añade un chatbot a tu web con dos líneas de código.</p>
        <p>Con el chatbot integrado, tus usuarios podrán interactuar con tu sitio web de manera más dinámica y obtener respuestas a sus preguntas de forma instantánea.</p>
        <p>Este chatbot utiliza ScopeJS y ChatGPT para proporcionar una experiencia de conversación natural y útil.</p>
        <p style="text-align: center; font-weight: bold; text-decoration: underline">En esta misma página puedes comprobar su funcionamiento sin personalización</p>
      `,
      links: [
        {
          title: "GitHub",
          href: "https://github.com/PabloTheBlink/ChatbotJS",
        },
      ],
    },
    {
      title: "Dink",
      align: ALIGN.CENTER,
      content: /* HTML */ `
        <p>Acorta tus enlaces de manera rápida y cómoda con Dink.</p>
        <p>Con Dink, puedes convertir enlaces largos en URL cortas y fáciles de compartir en solo unos segundos.</p>
        <p>Este servicio utiliza tecnología avanzada para garantizar que tus enlaces sean seguros y siempre accesibles.</p>
        <p style="text-align: center; font-weight: bold; text-decoration: underline">Prueba el servicio en esta página y comprueba su eficiencia</p>
      `,
      links: [
        {
          title: "Aplicación Web",
          href: "https://dink.devetty.es/",
        },
      ],
    },
    {
      title: "Auth",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>Auth es una pasarela de autenticación segura y fácil de usar.</p>
        <p>Con Auth, puedes autenticar a tus usuarios llamando a <code>auth.devetty.es?redirect_url=xxxx</code>.</p>
        <p>Una vez que los usuarios inician sesión, serán redirigidos a la URL proporcionada con un token en la cabecera, asegurando una integración sin problemas con tu aplicación.</p>
        <p style="text-align: center; font-weight: bold; text-decoration: underline">Prueba Auth en esta página y experimenta una autenticación rápida y segura</p>
      `,
      links: [
        {
          title: "Aplicación Web",
          href: "https://auth.devetty.es",
        },
      ],
    },
  ],
  tecnologias: [
    {
      title: "JavaScript",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>JavaScript es un lenguaje de programación ampliamente utilizado para el desarrollo web. Se utiliza tanto en el lado del cliente como en el servidor, gracias a entornos como Node.js. JavaScript es conocido por su capacidad para crear interactividad en páginas web y aplicaciones.</p>
        <p>Además de su uso en el desarrollo web, JavaScript también se utiliza en el desarrollo de aplicaciones móviles, juegos, extensiones de navegador y muchas otras áreas. Es un lenguaje versátil con una gran comunidad de desarrolladores y una amplia gama de bibliotecas y marcos disponibles.</p>
      `,
    },
    {
      title: "Java",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>Java es un lenguaje de programación orientado a objetos que se utiliza en una amplia variedad de aplicaciones, desde aplicaciones de escritorio hasta aplicaciones web y móviles. Java es conocido por su portabilidad y su amplia comunidad de desarrolladores.</p>
        <p>Java se utiliza en el desarrollo de aplicaciones empresariales, juegos, aplicaciones Android, sistemas embebidos y muchas otras áreas. Es un lenguaje robusto y escalable que ofrece un alto nivel de seguridad y rendimiento.</p>
      `,
    },
    {
      title: "PHP",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>PHP es un lenguaje de programación diseñado específicamente para el desarrollo web. Se utiliza principalmente para crear aplicaciones web dinámicas y sitios web interactivos. PHP es conocido por su facilidad de uso y su integración con bases de datos.</p>
        <p>PHP se utiliza en una amplia variedad de aplicaciones web, desde simples sitios de blogs hasta complejas plataformas de comercio electrónico. Es un lenguaje flexible y potente que ofrece una amplia gama de funciones y características para el desarrollo web.</p>
      `,
    },
    {
      title: "SQL",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>SQL (Structured Query Language) es un lenguaje utilizado para comunicarse con bases de datos relacionales. Se utiliza para realizar consultas, inserciones, actualizaciones y eliminaciones de datos en bases de datos. SQL es esencial para el desarrollo de aplicaciones que requieren acceso y manipulación de datos almacenados en bases de datos.</p>
        <p>Además de su uso en bases de datos relacionales tradicionales como MySQL, SQL Server y PostgreSQL, SQL también se utiliza en sistemas de gestión de bases de datos NoSQL como MongoDB y Cassandra. Es un lenguaje fundamental para el desarrollo de aplicaciones empresariales y sistemas de información.</p>
      `,
    },
    {
      title: "Angular",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>Angular es un framework de JavaScript desarrollado por Google para construir aplicaciones web de una sola página (SPA). Proporciona una estructura para organizar el código y una serie de características para facilitar el desarrollo, como enlace de datos bidireccional y enrutamiento.</p>
        <p>Angular es ampliamente utilizado en el desarrollo de aplicaciones empresariales y aplicaciones web complejas. Ofrece una gran cantidad de bibliotecas y herramientas adicionales para facilitar el desarrollo y la implementación de aplicaciones web de alta calidad.</p>
      `,
    },
    {
      title: "SpringBoot",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>Spring Boot es un framework de Java que facilita la creación de aplicaciones Java empresariales. Proporciona una forma rápida de configurar y desarrollar aplicaciones, eliminando gran parte de la configuración manual requerida por los proyectos Spring tradicionales.</p>
        <p>Spring Boot se utiliza en una amplia variedad de aplicaciones empresariales, incluidos servicios web, aplicaciones móviles, sistemas de gestión de contenido y mucho más. Es conocido por su facilidad de uso, su amplia compatibilidad con otras bibliotecas y su comunidad activa de desarrolladores.</p>
      `,
    },
    {
      title: "Laravel",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>Laravel es un framework de PHP que sigue el patrón de diseño MVC (Modelo-Vista-Controlador) y se utiliza para el desarrollo de aplicaciones web. Laravel ofrece una sintaxis elegante y expresiva que permite a los desarrolladores escribir código limpio y mantenible con facilidad.</p>
        <p>Laravel se utiliza en una amplia variedad de aplicaciones web, desde pequeños proyectos personales hasta grandes plataformas empresariales. Ofrece una serie de características avanzadas, como enrutamiento flexible, migraciones de bases de datos, autenticación de usuarios y pruebas automatizadas, que facilitan el desarrollo de aplicaciones web robustas y escalables.</p>
      `,
    },
    {
      title: "HTML5",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>HTML5 es la última versión del lenguaje de marcado HTML utilizado para crear páginas web. Introduce nuevas características y elementos que permiten a los desarrolladores crear sitios web más interactivos y dinámicos, como el soporte integrado para audio y video, gráficos vectoriales escalables (SVG) y aplicaciones web offline.</p>
        <p>HTML5 se utiliza en una amplia variedad de aplicaciones web, desde simples sitios de blogs hasta complejas plataformas de comercio electrónico. Ofrece una serie de características avanzadas, como formularios mejorados, semántica mejorada y soporte para almacenamiento local, que permiten a los desarrolladores crear experiencias web modernas y atractivas.</p>
      `,
    },
    {
      title: "CSS3",
      align: ALIGN.LEFT,
      content: /* HTML */ `
        <p>CSS3 es la última versión del lenguaje de estilos CSS utilizado para dar estilo a páginas web. Introduce nuevas características y propiedades que permiten a los diseñadores y desarrolladores crear diseños web más avanzados y atractivos, como transiciones y animaciones, sombras y bordes, y soporte para fuentes web personalizadas.</p>
        <p>CSS3 se utiliza en conjunto con HTML5 y JavaScript para crear la apariencia y el diseño de páginas web. Ofrece una serie de características avanzadas, como flexbox y grid, que facilitan la creación de diseños web flexibles y responsivos.</p>
      `,
    },
    {
      title: "Git",
      align: ALIGN.RIGHT,
      content: /* HTML */ `
        <p>Git es un sistema de control de versiones distribuido ampliamente utilizado en el desarrollo de software. Permite a los desarrolladores colaborar en proyectos, realizar un seguimiento de los cambios en el código fuente y revertir a versiones anteriores si es necesario. Git es conocido por su rapidez, eficiencia y capacidad para gestionar proyectos de cualquier tamaño.</p>
        <p>Git se utiliza en una amplia variedad de proyectos de desarrollo de software, desde proyectos individuales hasta grandes proyectos de código abierto. Ofrece una serie de características avanzadas, como ramificación y fusión, etiquetado de versiones y gestión de conflictos, que facilitan el trabajo colaborativo y la gestión del código fuente.</p>
      `,
    },
    {
      align: ALIGN.LEFT,
      title: "API REST",
      content: /* HTML */ `
        <p>Una API REST (Representational State Transfer) es una interfaz de programación de aplicaciones que utiliza los métodos HTTP estándar (GET, POST, PUT, DELETE) para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en recursos. Las API REST se utilizan comúnmente en el desarrollo de aplicaciones web y móviles para la comunicación entre el cliente y el servidor.</p>
        <p>Las API REST se utilizan en una amplia variedad de aplicaciones, desde aplicaciones móviles y sitios web hasta servicios web y aplicaciones empresariales. Ofrecen una forma sencilla y eficiente de acceder y manipular datos a través de la web, lo que permite a los desarrolladores crear aplicaciones modernas y escalables.</p>
      `,
    },
    {
      align: ALIGN.RIGHT,
      title: "PHP Slim Framework",
      content: /* HTML */ `
        <p>PHP Slim Framework es un microframework PHP que te permite crear aplicaciones web rápidas y eficientes con una sintaxis simple y elegante.</p>
        <p>Con Slim, puedes construir APIs RESTful, aplicaciones web del lado del servidor y más, sin el exceso de funcionalidad que a menudo se encuentra en otros frameworks.</p>
        <p>Slim es ideal para proyectos pequeños y medianos donde se valora la velocidad de desarrollo y el rendimiento.</p>
      `,
    },
    {
      align: ALIGN.LEFT,
      title: "React",
      content: /* HTML */ `
        <p>React es una biblioteca de JavaScript desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y dinámicas.</p>
        <p>Con React, puedes crear componentes reutilizables que gestionan su propio estado, lo que facilita el desarrollo y mantenimiento de aplicaciones complejas.</p>
        <p>React se ha convertido en una herramienta esencial en el desarrollo frontend moderno debido a su eficiencia, flexibilidad y fuerte comunidad de soporte.</p>
      `,
    },
    {
      align: ALIGN.RIGHT,
      title: "Next.js",
      content: /* HTML */ `
        <p>Next.js es un framework de React que permite la renderización del lado del servidor y la generación de sitios estáticos para aplicaciones web rápidas y optimizadas.</p>
        <p>Con Next.js, puedes disfrutar de características como el enrutamiento basado en archivos, la carga estática de datos y la generación de páginas dinámicas, todo con una configuración mínima.</p>
        <p>Next.js es ideal para desarrollar aplicaciones web modernas, mejorando el rendimiento y la experiencia del usuario con técnicas avanzadas de renderización.</p>
      `,
    },
    {
      align: ALIGN.LEFT,
      title: "Astro",
      content: /* HTML */ `
        <p>Astro es un moderno framework para construir sitios web rápidos y ligeros, enfocado en la generación de contenido estático y la entrega eficiente.</p>
        <p>Astro permite combinar múltiples frameworks de frontend como React, Vue, y Svelte en un solo proyecto, lo que facilita la creación de aplicaciones web híbridas.</p>
        <p>Con Astro, puedes optimizar la entrega de contenido al navegador mediante la carga diferida de JavaScript y la generación de HTML estático en el momento de la construcción.</p>
      `,
    },
  ],
};

export const HTTPS = "https:";
