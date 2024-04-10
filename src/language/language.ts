import LocalizedStrings from "react-localization";

export const strings = new LocalizedStrings({
  en: {
    // English
    // components/Header.tsx
    TITLE: "PocketBills",
    ADD_BILL: "Add Bill",

    // components/Stats.tsx
    DUE: "Due",
    OVERDUE: "Overdue",
    PAID: "Paid",
    TOTAL_DUE: "Total Due",
    TOTAL_PAID: "Total Paid",

    // components/Search.tsx
    SEARCH_PLACEHOLDER: "Search for a bill",

    // components/BillList.tsx
    BILL_NO_SEARCH: "No Search Results",
    BILL_COLLAPSE: "Collapse",
    BILL_EXPAND: "Expand all",
    BILL_BILLS: "bills",

    // components/BillItem.tsx
    ALERT_HEADER: "Update Bill",
    ALERT_PLACEHOLDER_1: "Bill Name",
    ALERT_PLACEHOLDER_2: "Bill Category",
    ALERT_PLACEHOLDER_3: "Minimum amount owed",
    ALERT_CANCEL: "Cancel",
    ALERT_OKAY: "OKAY",
    ARCHIVE: "Archive",
    UNARCHIVE: "Unarchive",
    UPDATE: "Update",
    DELETE: "Delete",
    TAX_DEDUCTIBLE: "Tax Deductible",

    // components/Sidemenu.tsx
    HOME: "Home",
    PRIVACY_POLICY: "Privacy Policy",
    TERMS_OF_USE: "Terms of Use",
    CLEAR_DATA: "Clear Data",
    REMOVE_ALL_DATA: "Remove All Data",
    RESET_SUBHEADER: "Are you sure?",

    // components/AddModal.tsx
    REQUIRED_NAME: "Name is required",
    REQUIRED_CATEGORY: "Category is required",
    REQUIRED_AMOUNT: "Amount owed must be greater than 0",
    REQUIRED_DATE: "Date is required",
    PLACEHOLDER_NAME: "Bill Name",
    PLACEHOLDER_CATEGORY: "Bill Category",
    PLACEHOLDER_AMOUNT: "Amount Owed",
    INPUT_REQUIRED: "required",

    // pages/Home.tsx
    DUE_TODAY: "Bill due today",
    DUE_WEEK: "Bill due in one week",
    DUE_PASTDUE: "Bill is past due",
    DUE_YOUR: "Your",
    DUE_BILL_TODAY: "bill is due today",
    DUE_BILL_WEEK: "bill is due in one week",
    DUE_BILL_PASTDUE: "bill is past due",
    BILL_UPDATED: "Bill updated successfully",
    BILL_PAST_DIVIDER: "Past Due Bills",
    BILL_TODAY_DIVIDER: "Bills Due Today",
    BILL_UPCOMING_DIVIDER: "Upcoming Bills",
    BILL_PAID_DIVIDER: "Paid Bills",
    BILL_TAX_DIVIDER: "Tax Deductible Bills",

    // pages/Privacy.tsx
    PRIVACY_POLICY_TEXT_1: `This Privacy Policy is meant to help you understand what
            information we collect, why we collect it, and how you
            can update, manage, export, and delete your information.`,
    PRIVACY_POLICY_TEXT_2: `INFORMATION LITESTEP COLLECTS`,
    PRIVACY_POLICY_TEXT_3: `What ever data you create within the application its
            self, you have full control over. It’s your data to Add,
            Edit, or Delete. If you do not wish to store any
            information, simply delete it off of the application. We
            want you to understand that you are in control of your
            data.`,
    PRIVACY_POLICY_TEXT_4: `Things you create or provide to us`,
    PRIVACY_POLICY_TEXT_5: `When you create a LiteStep Account, you provide us with
            personal information that includes your name and a email`,
    PRIVACY_POLICY_TEXT_6: `The content you add using the application is your own.
            We do not assume ownership of any information you input
            into the application.`,
    PRIVACY_POLICY_TEXT_7: `Information we collect as you use our services`,
    PRIVACY_POLICY_TEXT_8: `We may collect crash or bug reports sent by the
            application during usage.`,
    PRIVACY_POLICY_TEXT_9: `We collect this information when a LiteStep service on
            your device contacts our servers — for example, when you
            install an app from the IOS App Store or when a service
            checks for automatic updates.`,
    PRIVACY_POLICY_TEXT_10: `WHY LITESTEP COLLECTS DATA`,
    PRIVACY_POLICY_TEXT_11: `We use your information to ensure our services are
            working as intended, such as tracking outages or
            troubleshooting issues that get report to us. We use
            that information to make improvements to our services.`,
    PRIVACY_POLICY_TEXT_12: `We use the information we collect in existing services
            to help us develop new ones. We use the information we
            collect to provide personalized content.`,
    PRIVACY_POLICY_TEXT_13: `We don’t share information that personally identifies
            you with advertisers, such as your name or email.`,
    PRIVACY_POLICY_TEXT_14: `We use data for analytics and measurement to understand
            how our services are used. For example, we analyze data
            about your visits to our sites to do things like
            optimize product design. We use a variety of tools to do
            this, including Google Analytics.`,

    // pages/Terms.tsx
    TERMS_1: `Welcome to LiteStep!`,
    TERMS_2: `Thanks for using our products and services. The Services
            are provided by LiteStep.`,
    TERMS_3: `By using our Services, you are agreeing to these terms.
            Please read them carefully.`,
    TERMS_4: `Using our Services`,
    TERMS_5: `You must follow any policies made available to you
            within the Services.`,
    TERMS_6: `Don’t misuse our Services. Don’t try to access our
            Services using any method other than the interface and
            the instructions provided. You may use our Services only
            as permitted by law, including applicable export and
            re-export control laws and regulations. We may suspend
            or stop providing our Services to you if you do not
            comply with our terms and conditions or policies or if
            we are investigating suspected misconduct.`,
    TERMS_7: `Using our Services does not give you ownership of any
            intellectual property rights in our Services or the
            content you access. You may not reuse content from our
            Services unless granted permission or are otherwise
            permitted by law. These terms do not grant you the right
            to use any branding or logos used in our Services. Don’t
            remove, obscure, or alter any legal notices displayed in
            or along with our Services.`,
    TERMS_8: `Any content provided is the sole responsibility of the
            entity that makes it available. We may review content to
            determine whether it is illegal or violates our
            policies, we may remove or refuse to display content
            that we reasonably believe violates our policies or the
            law.`,
    TERMS_9: `In connection with your use of the Services, we may send
            you service announcements, administrative messages, and
            other information. You may opt out of some of those
            communications.`,
    TERMS_10: `Do not use such Services in a way that distracts you and
            prevents you from obeying traffic or safety laws.`,
    TERMS_11: `Your User Account`,
    TERMS_12: `You will need a User Account in order to use our
            Services. You may create your own account, or you may
            use either an Apple, Google, or Facebook Account to
            Login.`,
    TERMS_13: `To protect your LiteStep Account, keep your password
            confidential. You are responsible for the activity that
            happens in your LiteStep Account.`,
    TERMS_14: `Privacy and Copyright Protection`,
    TERMS_15: `Our privacy policy explains how we treat your personal
            data and protect your privacy when you use our Services.
            By using our Services, you agree that LiteStep can use
            such data in accordance with our privacy policies.`,
    TERMS_16: `We respond to notices of alleged copyright infringement
            and terminate accounts of repeat infringers according to
            the process set out in the U.S. Digital Millennium
            Copyright Act.`,
    TERMS_17: `Your Content in our Services`,
    TERMS_18: `Our Services allow you to upload, submit, store, send or
            receive content. You retain ownership of any
            intellectual property rights that you hold in that
            content.`,
    TERMS_19: `When you upload, submit, store, send or receive content
            to or through our Services, you give LiteStep (and those
            we work with) a worldwide license to use, host, store,
            reproduce, modify, create derivative works (such as
            those resulting from translations, adaptations or other
            changes we make so that your content works better with
            our Services), communicate, publish, publicly perform,
            publicly display and distribute such content. The rights
            you grant in this license are for the limited purpose of
            operating, promoting, and improving our Services, and to
            develop new ones. This license continues even if you
            stop using our Services. Some Services may offer you
            ways to access and remove content that has been provided
            to that Service.`,
    TERMS_20: `You can find more information about how LiteStep uses
            and stores content in the privacy policy. If you submit
            feedback or suggestions about our Services, we may use
            your feedback or suggestions without obligation to you.`,
    TERMS_21: `About Software in our Services`,
    TERMS_22: `When a Service requires or includes downloadable
            software, this software may update automatically on your
            device once a new version or feature is available. Some
            Services may let you adjust your automatic update
            settings.`,
    TERMS_23: `LiteStep gives you a personal, worldwide, royalty-free,
            non-assignable and non-exclusive license to use the
            software provided to you by LiteStep as part of the
            Services. This license is for the sole purpose of
            enabling you to use and enjoy the benefit of the
            Services as provided by LiteStep, in the manner
            permitted by these terms. You may not copy, modify,
            distribute, sell, or lease any part of our Services or
            included software, nor may you reverse engineer or
            attempt to extract the source code of that software,
            unless laws prohibit those restrictions or you have our
            written permission.`,
    TERMS_24: `Modifying and Terminating our Services`,
    TERMS_25: `We are constantly changing and improving our Services.
            We may add or remove functionalities or features, and we
            may suspend or stop a Service altogether.`,
    TERMS_26: `You can stop using our Services at any time, although
            we’ll be sorry to see you go. LiteStep may also stop
            providing Services to you, or add or create new limits
            to our Services at any time.`,
    TERMS_27: `We believe that you own your data and preserving your
            access to such data is important. If we discontinue a
            Service, where reasonably possible, we will give you
            reasonable advance notice and a chance to get
            information out of that Service.`,
    TERMS_28: `Our Warranties and Disclaimers`,
    TERMS_29: `We provide our Services using a commercially reasonable
            level of skill and care and we hope that you will enjoy
            using them. But there are certain things that we don’t
            promise about our Services.`,
    TERMS_30: `OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OR
            ADDITIONAL TERMS, NEITHER LITESTEP NOR ITS SUPPLIERS
            OR DISTRIBUTORS MAKE ANY SPECIFIC PROMISES ABOUT THE
            SERVICES. FOR EXAMPLE, WE DON’T MAKE ANY COMMITMENTS
            ABOUT THE CONTENT WITHIN THE SERVICES, THE SPECIFIC
            FUNCTIONS OF THE SERVICES, OR THEIR RELIABILITY,
            AVAILABILITY, OR ABILITY TO MEET YOUR NEEDS. WE
            PROVIDE THE SERVICES “AS IS”.`,
    TERMS_31: `SOME JURISDICTIONS PROVIDE FOR CERTAIN WARRANTIES,
            LIKE THE IMPLIED WARRANTY OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND
            NON-INFRINGEMENT. TO THE EXTENT PERMITTED BY LAW, WE
            EXCLUDE ALL WARRANTIES.`,
    TERMS_32: `Liability for our Services`,
    TERMS_33: `WHEN PERMITTED BY LAW, LITESTEP, AND LITESTEPS
            SUPPLIERS AND DISTRIBUTORS, WILL NOT BE RESPONSIBLE
            FOR LOST PROFITS, REVENUES, OR DATA, FINANCIAL
            LOSSES OR INDIRECT, SPECIAL, CONSEQUENTIAL,
            EXEMPLARY, OR PUNITIVE DAMAGES.`,
    TERMS_34: `TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY
            OF LITESTEP, AND ITS SUPPLIERS AND DISTRIBUTORS, FOR
            ANY CLAIMS UNDER THESE TERMS, INCLUDING FOR ANY
            IMPLIED WARRANTIES, IS LIMITED TO THE AMOUNT YOU
            PAID US TO USE THE SERVICES (OR, IF WE CHOOSE, TO
            SUPPLYING YOU THE SERVICES AGAIN).`,
    TERMS_35: `IN ALL CASES, LITESTEP, AND ITS SUPPLIERS AND
            DISTRIBUTORS, WILL NOT BE LIABLE FOR ANY LOSS OR
            DAMAGE THAT IS NOT REASONABLY FORESEEABLE.`,
    TERMS_36: `Business uses of our Services`,
    TERMS_37: `If you are using our Services on behalf of a business,
            that business accepts these terms. It will hold harmless
            and indemnify LiteStep and its affiliates, officers,
            agents, and employees from any claim, suit or action
            arising from or related to the use of the Services or
            violation of these terms, including any liability or
            expense arising from claims, losses, damages, suits,
            judgments, litigation costs and attorneys’ fees.`,
    TERMS_38: `About these Terms`,
    TERMS_39: `We may modify these terms or Services at any time. We’ll
            post notice of modifications to these Terms and Services
            on this page. We’ll post notice of modified additional
            terms in the applicable Service. Changes will not apply
            retroactively and will become effective no sooner than
            fourteen days after they are posted. However, changes
            addressing new functions for a Service or changes made
            for legal reasons will be effective immediately. If you
            do not agree to the modified terms for a Service, you
            should discontinue your use of that Service.`,
    TERMS_40: `If there is a conflict between these terms and the
            additional terms, the additional terms will control for
            that conflict.`,
    TERMS_41: `These terms control the relationship between LiteStep
            and you. They do not create any third party beneficiary
            rights.`,
    TERMS_42: `If you do not comply with these terms, and we don’t take
            action right away, this doesn’t mean that we are giving
            up any rights that we may have (such as taking action in
            the future).`,
    TERMS_43: `If it turns out that a particular term is not
            enforceable, this will not affect any other terms.`,
    TERMS_44: `The laws of Maryland, U.S.A., will apply to any disputes
            arising out of or relating to these terms or the
            Services. All claims arising out of or relating to these
            terms or the Services will be litigated exclusively in
            the federal or state courts of Maryland, USA, and you
            and LiteStep consent to personal jurisdiction in those
            courts.`,
  },
  es: {
    // Spanish
    // components/Header.tsx
    TITLE: "Billetes de bolsillo",
    ADD_BILL: "Agregar factura",

    // components/Stats.tsx
    DUE: "Vencido",
    OVERDUE: "Vencido",
    PAID: "Pagado",
    TOTAL_DUE: "Total debido",
    TOTAL_PAID: "Total pagado",

    // components/Search.tsx
    SEARCH_PLACEHOLDER: "Buscar una factura",

    // components/BillList.tsx
    BILL_NO_SEARCH: "Sin resultados de búsqueda",
    BILL_COLLAPSE: "Colapsar",
    BILL_EXPAND: "Expandir todo",
    BILL_BILLS: "facturas",

    // components/BillItem.tsx
    ALERT_HEADER: "Actualizar factura",
    ALERT_PLACEHOLDER_1: "Nombre de la factura",
    ALERT_PLACEHOLDER_2: "Categoría de factura",
    ALERT_PLACEHOLDER_3: "Cantidad mínima adeudada",
    ALERT_CANCEL: "Cancelar",
    ALERT_OKAY: "OKAY",
    ARCHIVE: "Archivo",
    UNARCHIVE: "Desarchivar",
    UPDATE: "Actualizar",
    DELETE: "Borrar",
    TAX_DEDUCTIBLE: "Deducible de impuestos",

    // components/Sidemenu.tsx
    HOME: "Casa",
    PRIVACY_POLICY: "Política de privacidad",
    TERMS_OF_USE: "Términos de Uso",
    CLEAR_DATA: "Borrar datos",
    REMOVE_ALL_DATA: "Eliminar todos los datos",
    RESET_SUBHEADER: "¿Estás seguro?",

    // components/AddModal.tsx
    REQUIRED_NAME: "Se requiere el nombre",
    REQUIRED_CATEGORY: "la categoria es requerida",
    REQUIRED_AMOUNT: "El monto adeudado debe ser mayor que 0",
    REQUIRED_DATE: "Se requiere fecha",
    PLACEHOLDER_NAME: "Nombre de la factura",
    PLACEHOLDER_CATEGORY: "Categoría de factura",
    PLACEHOLDER_AMOUNT: "Cantidad adeudada",
    INPUT_REQUIRED: "requerido",

    // pages/Home.tsx
    DUE_TODAY: "Factura vencida hoy",
    DUE_WEEK: "Factura vencida en una semana",
    DUE_PASTDUE: "La factura está vencida",
    DUE_YOUR: "Su",
    DUE_BILL_TODAY: "la factura vence hoy",
    DUE_BILL_WEEK: "la factura vence en una semana",
    DUE_BILL_PASTDUE: "la factura está vencida",
    BILL_UPDATED: "Factura actualizada exitosamente",
    BILL_PAST_DIVIDER: "Facturas vencidas",
    BILL_TODAY_DIVIDER: "Facturas vencidas hoy",
    BILL_UPCOMING_DIVIDER: "Próximas facturas",
    BILL_PAID_DIVIDER: "Facturas pagadas",
    BILL_TAX_DIVIDER: "Facturas deducibles de impuestos",

    // pages/Privacy.tsx
    PRIVACY_POLICY_TEXT_1: `Esta Política de privacidad está destinada a ayudarlo a comprender qué
            información que recopilamos, por qué la recopilamos y cómo usted
            puede actualizar, administrar, exportar y eliminar su información.`,
    PRIVACY_POLICY_TEXT_2: `INFORMACIÓN QUE LITESTEP RECOPILA`,
    PRIVACY_POLICY_TEXT_3: `Cualesquiera que sean los datos que cree dentro de la aplicación, su
            usted mismo, usted tiene control total sobre. Son sus datos para agregar,
            Editar o Eliminar. Si no desea almacenar ninguna
            información, simplemente elimínela de la aplicación. Nosotros
            quiero que entiendas que tienes el control de tu
            datos.`,
    PRIVACY_POLICY_TEXT_4: `Cosas que creas o nos proporcionas`,
    PRIVACY_POLICY_TEXT_5: `Cuando crea una cuenta LiteStep, nos proporciona
            información personal que incluye su nombre y un correo electrónico`,
    PRIVACY_POLICY_TEXT_6: `El contenido que agregas usando la aplicación es tuyo.
            No asumimos la propiedad de ninguna información que ingrese
            en la aplicación.`,
    PRIVACY_POLICY_TEXT_7: `Información que recopilamos a medida que utiliza nuestros servicios`,
    PRIVACY_POLICY_TEXT_8: `Podemos recopilar informes de fallas o errores enviados por el aplicación 
            durante el uso.`,
    PRIVACY_POLICY_TEXT_9: `Recopilamos esta información cuando un servicio LiteStep en
            su dispositivo se comunica con nuestros servidores, por ejemplo, cuando usted
            instalar una aplicación de la App Store de IOS o cuando un servicio
            comprueba si hay actualizaciones automáticas.`,
    PRIVACY_POLICY_TEXT_10: `POR QUÉ LITESTEP RECOPILA DATOS`,
    PRIVACY_POLICY_TEXT_11: `Usamos su información para asegurar que nuestros servicios sean
            trabajando según lo previsto, como el seguimiento de interrupciones o
            solución de problemas que nos informan. Usamos
            esa información para hacer mejoras a nuestros servicios.`,
    PRIVACY_POLICY_TEXT_12: `Usamos la información que recopilamos en los servicios existentes
            para ayudarnos a desarrollar otros nuevos. Usamos la información que
            recopilar para proporcionar contenido personalizado.`,
    PRIVACY_POLICY_TEXT_13: `No compartimos información que identifique personalmente
            con los anunciantes, como su nombre o correo electrónico.`,
    PRIVACY_POLICY_TEXT_14: `Usamos datos para análisis y medición para comprender
            cómo se utilizan nuestros servicios. Por ejemplo, analizamos datos
            sobre sus visitas a nuestros sitios para hacer cosas como
            optimizar el diseño del producto. Usamos una variedad de herramientas para hacer
            esto, incluido Google Analytics.`,

    // pages/Terms.tsx
    TERMS_1: `¡Bienvenido a LiteStep!`,
    TERMS_2: `Gracias por utilizar nuestros productos y servicios. Los servicios
            son proporcionados por LiteStep.`,
    TERMS_3: `Al utilizar nuestros Servicios, usted acepta estos términos.
            Por favor, léalas cuidadosamente.`,
    TERMS_4: `Uso de nuestros servicios`,
    TERMS_5: `Debe seguir todas las políticas disponibles para usted
            dentro de los Servicios.`,
    TERMS_6: `No haga un mal uso de nuestros Servicios. No intente acceder a nuestro
            Servicios utilizando cualquier método que no sea la interfaz y
            las instrucciones proporcionadas. Puede utilizar nuestros Servicios únicamente
            según lo permita la ley, incluida la exportación y
            leyes y reglamentos de control de reexportaciones. Podemos suspender
            o dejar de proporcionarle nuestros Servicios si no lo hace
            cumplir con nuestros términos y condiciones o políticas o si
            estamos investigando sospechas de mala conducta.`,
    TERMS_7: `El uso de nuestros Servicios no le otorga la propiedad de ningún
            derechos de propiedad intelectual en nuestros Servicios o el
            contenido al que accede. No puede reutilizar el contenido de nuestro
            Servicios a menos que se otorgue permiso o sean de otro modo
            permitido por la ley. Estos términos no le otorgan el derecho
            utilizar cualquier marca o logotipo utilizado en nuestros Servicios. No
            eliminar, ocultar o alterar cualquier aviso legal que se muestre en
            o junto con nuestros Servicios.`,
    TERMS_8: `Cualquier contenido proporcionado es responsabilidad exclusiva del
            entidad que lo pone a disposición. Podemos revisar el contenido para
            determinar si es ilegal o viola nuestros
            políticas, podemos eliminar o negarnos a mostrar contenido
            que creamos razonablemente que viola nuestras políticas o las
            ley.`,
    TERMS_9: `En relación con su uso de los Servicios, podemos enviar
            servicios de anuncios, mensajes administrativos y
            otra información. Puede optar por no participar en algunos de esos
            comunicaciones`,
    TERMS_10: `No use tales Servicios de una manera que lo distraiga a usted y
            le impide obedecer las leyes de tránsito o de seguridad.`,
    TERMS_11: `Su cuenta de usuario`,
    TERMS_12: `Necesitará una cuenta de usuario para utilizar nuestro
            Servicios. Puede crear su propia cuenta, o puede
            utilizar una cuenta de Apple, Google o Facebook para
            Acceso.`,
    TERMS_13: `Para proteger su cuenta LiteStep, mantenga su contraseña
            confidencial. Usted es responsable de la actividad que
            ocurre en su cuenta LiteStep.`,
    TERMS_14: `Privacidad y protección de derechos de autor`,
    TERMS_15: `Nuestra política de privacidad explica cómo tratamos su información personal.
            datos y proteger su privacidad cuando utiliza nuestros Servicios.
            Al usar nuestros Servicios, usted acepta que LiteStep puede usar
            dichos datos de acuerdo con nuestras políticas de privacidad.`,
    TERMS_16: `Respondemos a avisos de supuesta infracción de derechos de autor
            y cancelar las cuentas de los infractores reincidentes de acuerdo con
            el proceso establecido en el Milenio Digital de EE. UU.
            Ley de derechos de autor.`,
    TERMS_17: `Su Contenido en nuestros Servicios`,
    TERMS_18: `Nuestros Servicios le permiten cargar, enviar, almacenar, enviar o
            recibir contenido. Usted conserva la propiedad de cualquier
            derechos de propiedad intelectual que posee en ese
            contenido.`,
    TERMS_19: `Cuando carga, envía, almacena, envía o recibe contenido
            hacia o a través de nuestros Servicios, le das a LiteStep (y esos
            trabajamos con) una licencia mundial para usar, alojar, almacenar,
            reproducir, modificar, crear obras derivadas (como
            los resultantes de traducciones, adaptaciones u otros
            cambios que hacemos para que su contenido funcione mejor con
            nuestros Servicios), comunicar, publicar, realizar públicamente,
            exhibir y distribuir públicamente dicho contenido. Los derechos
            usted otorga en esta licencia son para el propósito limitado de
            operar, promover y mejorar nuestros Servicios, y para
            desarrollar otros nuevos. Esta licencia continúa incluso si usted
            dejar de usar nuestros Servicios. Algunos Servicios pueden ofrecerle
            formas de acceder y eliminar el contenido que se ha proporcionado
            a ese Servicio.`,
    TERMS_20: `Puede encontrar más información sobre cómo utiliza LiteStep
            y almacena contenido en la política de privacidad. si envías
            comentarios o sugerencias sobre nuestros Servicios, podemos utilizar
            sus comentarios o sugerencias sin ningún compromiso para con usted.`,
    TERMS_21: `Acerca del software en nuestros servicios`,
    TERMS_22: `Cuando un Servicio requiere o incluye contenido descargable
            software, este software puede actualizarse automáticamente en su
            dispositivo una vez que una nueva versión o función esté disponible. Alguno
            Los servicios pueden permitirle ajustar su actualización automática
            ajustes.`,
    TERMS_23: `LiteStep le brinda un acceso personal, mundial, libre de regalías,
            licencia intransferible y no exclusiva para utilizar el
            software proporcionado por LiteStep como parte del
            Servicios. Esta licencia es con el único propósito de
            lo que le permite utilizar y disfrutar de los beneficios de la
            Servicios proporcionados por LiteStep, de la manera
            permitido por estos términos. Usted no puede copiar, modificar,
            distribuir, vender o arrendar cualquier parte de nuestros Servicios o
            software incluido, ni puede realizar ingeniería inversa o
            intentar extraer el código fuente de ese software,
            a menos que las leyes prohíban esas restricciones o usted tenga nuestra
            permiso escrito.`,
    TERMS_24: `Modificación y terminación de nuestros servicios`,
    TERMS_25: `Estamos constantemente cambiando y mejorando nuestros Servicios.
            Podemos agregar o eliminar funcionalidades o características, y
            puede suspender o detener un Servicio por completo.`,
    TERMS_26: `Puede dejar de usar nuestros Servicios en cualquier momento, aunque
            lamentaremos que te vayas. LiteStep también puede detener
            proporcionarle Servicios, o agregar o crear nuevos límites
            a nuestros Servicios en cualquier momento.`,
    TERMS_27: `Creemos que usted es dueño de sus datos y preservar su
            el acceso a tales datos es importante. Si descontinuamos un
            Servicio, cuando sea razonablemente posible, le daremos
            aviso previo razonable y la oportunidad de obtener
            información fuera de ese Servicio.`,
    TERMS_28: `Nuestras garantías y renuncias`,
    TERMS_29: `Brindamos nuestros Servicios utilizando un método comercialmente razonable
            nivel de habilidad y cuidado y esperamos que disfrute
            utilizarlos. Pero hay ciertas cosas que no
            promesa sobre nuestros Servicios.`,
    TERMS_30: `APARTE DE LO EXPRESAMENTE ESTABLECIDO EN ESTOS TÉRMINOS O
            TÉRMINOS ADICIONALES, NI LITESTEP NI SUS PROVEEDORES
            O LOS DISTRIBUIDORES HACEN PROMESAS ESPECÍFICAS SOBRE EL
            SERVICIOS. POR EJEMPLO, NO NOS COMPROMETEMOS
            SOBRE EL CONTENIDO DENTRO DE LOS SERVICIOS, EL ESPECÍFICO
            FUNCIONES DE LOS SERVICIOS, O SU FIABILIDAD,
            DISPONIBILIDAD O CAPACIDAD PARA SATISFACER SUS NECESIDADES. NOSOTROS
            PROPORCIONAR LOS SERVICIOS "TAL CUAL".`,
    TERMS_31: `ALGUNAS JURISDICCIONES OFRECEN CIERTAS GARANTÍAS,
            COMO LA GARANTÍA IMPLÍCITA DE COMERCIABILIDAD,
            IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y
            NO INFRACCIÓN. EN LA MEDIDA EN QUE LO PERMITA LA LEY, NOSOTROS
            EXCLUYA TODAS LAS GARANTÍAS.`,
    TERMS_32: `Responsabilidad por nuestros Servicios`,
    TERMS_33: `CUANDO LO PERMITA LA LEY, LITESTEP Y LITESTEPS
            PROVEEDORES Y DISTRIBUIDORES, NO SERÁN RESPONSABLES
            POR PÉRDIDA DE BENEFICIOS, INGRESOS O DATOS, FINANCIEROS
            PÉRDIDAS O INDIRECTAS, ESPECIALES, CONSECUENCIALES,
            DAÑOS EJEMPLARES O PUNITIVOS.`,
    TERMS_34: `EN LA MEDIDA EN QUE LO PERMITA LA LEY, LA RESPONSABILIDAD TOTAL
            DE LITESTEP, Y DE SUS PROVEEDORES Y DISTRIBUIDORES, POR
            CUALQUIER RECLAMO BAJO ESTOS TÉRMINOS, INCLUYENDO CUALQUIER
            GARANTÍAS IMPLÍCITAS, ESTÁ LIMITADA A LA CANTIDAD QUE USTED
            NOS PAGÓ PARA UTILIZAR LOS SERVICIOS (O, SI ESCOGEMOS, PARA
            VOLVIENDO A SUMINISTRARLE LOS SERVICIOS).`,
    TERMS_35: `EN TODOS LOS CASOS, LITESTEP, Y SUS PROVEEDORES Y
            DISTRIBUIDORES, NO SERÁN RESPONSABLES DE NINGUNA PÉRDIDA O
            DAÑO QUE NO ES RAZONABLEMENTE PREVISIBLE.`,
    TERMS_36: `Usos comerciales de nuestros Servicios`,
    TERMS_37: `Si está utilizando nuestros Servicios en nombre de una empresa,
            que la empresa acepta estos términos. Se mantendrá inofensivo
            e indemnizar a LiteStep y sus afiliados, funcionarios,
            agentes y empleados de cualquier reclamo, juicio o acción
            que surja de o esté relacionado con el uso de los Servicios o
            violación de estos términos, incluyendo cualquier responsabilidad o
            gastos derivados de reclamaciones, pérdidas, daños, demandas,
            juicios, costas procesales y honorarios de abogados.`,
    TERMS_38: `Acerca de estos Términos`,
    TERMS_39: `Podemos modificar estos términos o Servicios en cualquier momento. Bien
            publicar aviso de modificaciones a estos Términos y Servicios
            en esta página. Publicaremos un aviso de cambios adicionales
            términos en el Servicio aplicable. No se aplicarán cambios
            retroactivamente y entrará en vigor no antes de
            catorce días después de su publicación. Sin embargo, los cambios
            abordar nuevas funciones para un Servicio o cambios realizados
            por razones legales entrará en vigor de inmediato. Si usted
            no está de acuerdo con los términos modificados para un Servicio, usted
            debe interrumpir su uso de ese Servicio.`,
    TERMS_40: `Si hay un conflicto entre estos términos y el
            términos adicionales, los términos adicionales controlarán
            ese conflicto`,
    TERMS_41: `Estos términos controlan la relación entre LiteStep
            y usted. No crean ningún tercero beneficiario
            derechos.`,
    TERMS_42: `Si no cumple con estos términos, y no tomamos
            acción de inmediato, esto no significa que estamos dando
            cualquier derecho que podamos tener (como tomar medidas en
            el futuro).`,
    TERMS_43: `Si resulta que un término en particular no es
            aplicable, esto no afectará a ningún otro término.`,
    TERMS_44: `Las leyes de Maryland, EE. UU., se aplicarán a cualquier disputa
            que surja de o se relacione con estos términos o el
            Servicios. Todas las reclamaciones que surjan de o estén relacionadas con estos
            términos o los Servicios serán litigados exclusivamente en
            los tribunales federales o estatales de Maryland, EE. UU., y usted
            y LiteStep dan su consentimiento a la jurisdicción personal en esos
            tribunales`,
  },
  fr: {
    // French
    // components/Header.tsx
    TITLE: "Billets de poche",
    ADD_BILL: "Ajouter une facture",

    // components/Stats.tsx
    DUE: "Pendiente",
    OVERDUE: "Atrasado",
    PAID: "Pagado",
    TOTAL_DUE: "Total dû",
    TOTAL_PAID: "Total pagado",

    // components/Search.tsx
    SEARCH_PLACEHOLDER: "Rechercher une facture",

    // components/BillList.tsx
    BILL_NO_SEARCH: "Aucun résultat de recherche",
    BILL_COLLAPSE: "Effondrement",
    BILL_EXPAND: "Développer tout",
    BILL_BILLS: "factures",

    // components/BillItem.tsx
    ALERT_HEADER: "Mettre à jour la facture",
    ALERT_PLACEHOLDER_1: "Nom de la facture",
    ALERT_PLACEHOLDER_2: "Catégorie de facture",
    ALERT_PLACEHOLDER_3: "Montant dû minimum",
    ALERT_CANCEL: "Annuler",
    ALERT_OKAY: "D'accord",
    ARCHIVE: "Archive",
    UNARCHIVE: "Désarchiver",
    UPDATE: "Mettre à jour",
    DELETE: "Effacer",
    TAX_DEDUCTIBLE: "Déductible d'impôts",

    // components/Sidemenu.tsx
    HOME: "Accueil",
    PRIVACY_POLICY: "Politique de confidentialité",
    TERMS_OF_USE: "Conditions d'utilisation",
    CLEAR_DATA: "Effacer les données",
    REMOVE_ALL_DATA: "Supprimer toutes les données",
    RESET_SUBHEADER: "Êtes-vous sûr?",

    // components/AddModal.tsx
    REQUIRED_NAME: "Le nom est requis",
    REQUIRED_CATEGORY: "La catégorie est obligatoire",
    REQUIRED_AMOUNT: "Le montant dû doit être supérieur à 0",
    REQUIRED_DATE: "La date est requise",
    PLACEHOLDER_NAME: "Nom de la facture",
    PLACEHOLDER_CATEGORY: "Catégorie de facture",
    PLACEHOLDER_AMOUNT: "Montant dû",
    INPUT_REQUIRED: "requis",

    // pages/Home.tsx
    DUE_TODAY: "Facture à payer aujourd'hui",
    DUE_WEEK: "Facture due dans une semaine",
    DUE_PASTDUE: "La facture est en souffrance",
    DUE_YOUR: "Ton",
    DUE_BILL_TODAY: "la facture est due aujourd'hui",
    DUE_BILL_WEEK: "la facture est due dans une semaine",
    DUE_BILL_PASTDUE: "la facture est en souffrance",
    BILL_UPDATED: "Facture mise à jour avec succès",
    BILL_PAST_DIVIDER: "Factures en souffrance",
    BILL_TODAY_DIVIDER: "Factures dues aujourd'hui",
    BILL_UPCOMING_DIVIDER: "Factures à venir",
    BILL_PAID_DIVIDER: "Factures payées",
    BILL_TAX_DIVIDER: "Factures déductibles d'impôt",

    // pages/Privacy.tsx
    PRIVACY_POLICY_TEXT_1: `Cette politique de confidentialité est destinée à vous aider à comprendre ce que
            informations que nous recueillons, pourquoi nous les recueillons et comment vous
            peut mettre à jour, gérer, exporter et supprimer vos informations.`,
    PRIVACY_POLICY_TEXT_2: `INFORMATIONS COLLECTÉES PAR LITESTEP`,
    PRIVACY_POLICY_TEXT_3: `Quelles que soient les données que vous créez dans l'application, elles
            vous-même, vous avez un contrôle total sur. Ce sont vos données à ajouter,
            Modifier ou supprimer. Si vous ne souhaitez pas stocker de
            informations, supprimez-les simplement de l'application. Nous
            voulez que vous compreniez que vous contrôlez votre
            Les données.`,
    PRIVACY_POLICY_TEXT_4: `Les choses que vous créez ou nous fournissez`,
    PRIVACY_POLICY_TEXT_5: `Lorsque vous créez un compte LiteStep, vous nous fournissez
            des informations personnelles comprenant votre nom et un e-mail`,
    PRIVACY_POLICY_TEXT_6: `Le contenu que vous ajoutez à l'aide de l'application vous appartient.
            Nous n'assumons pas la propriété des informations que vous saisissez
            dans l'application.`,
    PRIVACY_POLICY_TEXT_7: `Informations que nous collectons lorsque vous utilisez nos services`,
    PRIVACY_POLICY_TEXT_8: `Nous pouvons recueillir des rapports de plantage ou de bogue envoyés par le
            application pendant l'utilisation.`,
    PRIVACY_POLICY_TEXT_9: `Nous recueillons ces informations lorsqu'un service LiteStep sur
            votre appareil contacte nos serveurs — par exemple, lorsque vous
            installer une application depuis l'App Store IOS ou lorsqu'un service
            vérifie les mises à jour automatiques.`,
    PRIVACY_POLICY_TEXT_10: `POURQUOI LITESTEP COLLECTE DES DONNÉES`,
    PRIVACY_POLICY_TEXT_11: `Nous utilisons vos informations pour nous assurer que nos services sont
            fonctionner comme prévu, comme le suivi des pannes ou
            résoudre les problèmes qui nous sont signalés. Nous utilisons
            ces informations pour apporter des améliorations à nos services.`,
    PRIVACY_POLICY_TEXT_12: `Nous utilisons les informations que nous collectons dans les services existants
            pour nous aider à en développer de nouveaux. Nous utilisons les informations que nous
            collecter pour fournir un contenu personnalisé.`,
    PRIVACY_POLICY_TEXT_13: `Nous ne partageons pas d'informations qui identifient personnellement
            vous avec des annonceurs, tels que votre nom ou votre adresse e-mail.`,
    PRIVACY_POLICY_TEXT_14: `Nous utilisons les données à des fins d'analyse et de mesure pour comprendre
            comment nos services sont utilisés. Par exemple, nous analysons les données
            sur vos visites sur nos sites pour faire des choses comme
            optimiser la conception des produits. Nous utilisons une variété d'outils pour faire
            cela, y compris Google Analytics.`,

    // pages/Terms.tsx
    TERMS_1: `Bienvenue sur LiteStep !`,
    TERMS_2: `Merci d'utiliser nos produits et services. Les services
            sont fournis par LiteStep.`,
    TERMS_3: `En utilisant nos Services, vous acceptez ces conditions.
            Veuillez les lire attentivement.`,
    TERMS_4: `Utilisation de nos services`,
    TERMS_5: `Vous devez suivre toutes les politiques mises à votre disposition
            au sein des Services.`,
    TERMS_6: `N'abusez pas de nos Services. N'essayez pas d'accéder à notre
            Services utilisant toute méthode autre que l'interface et
            les instructions fournies. Vous ne pouvez utiliser nos Services que
            tel qu'autorisé par la loi, y compris l'exportation et
            lois et règlements sur le contrôle de la réexportation. Nous pouvons suspendre
            ou cesser de vous fournir nos services si vous ne le faites pas
            respecter nos termes et conditions ou politiques ou si
            nous enquêtons sur des soupçons d'inconduite.`,
    TERMS_7: `L'utilisation de nos services ne vous confère aucun droit de propriété sur
            droits de propriété intellectuelle sur nos Services ou sur
            contenu auquel vous accédez. Vous ne pouvez pas réutiliser le contenu de notre
            Services sauf autorisation ou autrement
            autorisé par la loi. Ces conditions ne vous donnent pas le droit
            d'utiliser toute marque ou logo utilisé dans nos Services. Ne le faites pas
            supprimer, masquer ou modifier les mentions légales affichées dans
            ou avec nos Services.`,
    TERMS_8: `Tout contenu fourni relève de la seule responsabilité du
            entité qui le met à disposition. Nous pouvons examiner le contenu pour
            déterminer s'il est illégal ou enfreint nos
            politiques, nous pouvons supprimer ou refuser d'afficher du contenu
            que nous pensons raisonnablement violer nos politiques ou les
            droit.`,
    TERMS_9: `Dans le cadre de votre utilisation des Services, nous pouvons envoyer
            vos annonces de service, messages administratifs et
            les autres informations. Vous pouvez vous désinscrire de certains d'entre eux
            communications.`,
    TERMS_10: `N'utilisez pas ces Services d'une manière qui vous distrait et
            vous empêche de respecter les règles de circulation ou de sécurité.`,
    TERMS_11: `Votre compte utilisateur`,
    TERMS_12: `Vous aurez besoin d'un compte utilisateur pour utiliser notre
            Prestations de service. Vous pouvez créer votre propre compte ou vous pouvez
            utiliser un compte Apple, Google ou Facebook pour
            Connexion.`,
    TERMS_13: `Pour protéger votre compte LiteStep, conservez votre mot de passe
            confidentiel. Vous êtes responsable de l'activité qui
            se passe dans votre compte LiteStep.`,
    TERMS_14: `Protection de la vie privée et des droits d'auteur`,
    TERMS_15: `Notre politique de confidentialité explique comment nous traitons vos données personnelles
            données et protéger votre vie privée lorsque vous utilisez nos Services.
            En utilisant nos Services, vous acceptez que LiteStep puisse utiliser
            ces données conformément à nos politiques de confidentialité.`,
    TERMS_16: `Nous répondons aux avis de violation présumée du droit d'auteur
            et résilier les comptes des contrevenants récidivistes selon
            le processus défini dans le U.S. Digital Millennium
            Loi sur le droit d'auteur.`,
    TERMS_17: `Votre Contenu dans nos Services`,
    TERMS_18: `Nos services vous permettent de télécharger, soumettre, stocker, envoyer ou
            recevoir du contenu. Vous conservez la propriété de tout
            les droits de propriété intellectuelle que vous détenez dans ce
            contenu.`,
    TERMS_19: `Lorsque vous téléchargez, soumettez, stockez, envoyez ou recevez du contenu
            à ou via nos Services, vous donnez LiteStep (et ceux
            avec lesquels nous travaillons) une licence mondiale pour utiliser, héberger, stocker,
            reproduire, modifier, créer des œuvres dérivées (telles que
            celles résultant de traductions, d'adaptations ou d'autres
            modifications que nous apportons pour que votre contenu fonctionne mieux avec
            nos Services), communiquer, publier, exécuter publiquement,
            afficher et distribuer publiquement ce contenu. Les droits
            que vous accordez dans cette licence sont dans le but limité de
            exploiter, promouvoir et améliorer nos Services, et pour
            en développer de nouveaux. Cette licence continue même si vous
            cesser d'utiliser nos Services. Certains Services peuvent vous offrir
            les moyens d'accéder au contenu fourni et de le supprimer
            à ce Service.`,
    TERMS_20: `Vous pouvez trouver plus d'informations sur la façon dont LiteStep utilise
            et stocke le contenu dans la politique de confidentialité. Si vous soumettez
            commentaires ou suggestions sur nos services, nous pouvons utiliser
            vos commentaires ou suggestions sans engagement envers vous.`,
    TERMS_21: `À propos des logiciels dans nos services`,
    TERMS_22: `Lorsqu'un Service nécessite ou inclut des
            logiciel, ce logiciel peut se mettre à jour automatiquement sur votre
            appareil dès qu'une nouvelle version ou fonctionnalité est disponible. Quelques
            Les services peuvent vous permettre d'ajuster votre mise à jour automatique
            réglages.`,
    TERMS_23: `LiteStep vous donne un accès personnel, mondial, libre de droits,
            licence incessible et non exclusive d'utilisation du
            logiciel qui vous est fourni par LiteStep dans le cadre du
            Prestations de service. Cette licence est dans le seul but de
            vous permettant d'utiliser et de profiter des avantages de
            Services tels que fournis par LiteStep, de la manière
            permis par ces termes. Vous ne pouvez pas copier, modifier,
            distribuer, vendre ou louer une partie de nos Services ou
            logiciel inclus, et vous ne pouvez pas désosser ou
            tenter d'extraire le code source de ce logiciel,
            sauf si les lois interdisent ces restrictions ou si vous avez notre
            autorisation écrite.`,
    TERMS_24: `Modification et résiliation de nos Services`,
    TERMS_25: `Nous modifions et améliorons constamment nos Services.
            Nous pouvons ajouter ou supprimer des fonctionnalités ou des caractéristiques, et nous
            peut suspendre ou arrêter complètement un Service.`,
    TERMS_26: `Vous pouvez cesser d'utiliser nos services à tout moment, bien que
            nous serons désolés de vous voir partir. LiteStep peut également arrêter
            vous fournir des Services, ou ajouter ou créer de nouvelles limites
            à nos Services à tout moment.`,
    TERMS_27: `Nous pensons que vous êtes propriétaire de vos données et que vous préservez votre
            l'accès à ces données est important. Si nous arrêtons un
            Service, dans la mesure du possible, nous vous donnerons
            un préavis raisonnable et une chance d'obtenir
            informations provenant de ce service.`,
    TERMS_28: `Nos garanties et clauses de non-responsabilité`,
    TERMS_29: `Nous fournissons nos services en utilisant un prix commercialement raisonnable
            niveau de compétence et de soin et nous espérons que vous apprécierez
            les utiliser. Mais il y a certaines choses que nous ne faisons pas
            promesse sur nos services.`,
    TERMS_30: `AUTRE QUE COMME EXPRESSÉMENT ÉNONCÉ DANS CES CONDITIONS OU
            CONDITIONS SUPPLÉMENTAIRES, NI LITESTEP NI SES FOURNISSEURS
            OU LES DISTRIBUTEURS FONT DES PROMESSES SPÉCIFIQUES CONCERNANT
            PRESTATIONS DE SERVICE. PAR EXEMPLE, NOUS NE PRENONS AUCUN ENGAGEMENT
            À PROPOS DU CONTENU DANS LES SERVICES, LES SPÉCIFIQUES
            FONCTIONS DES SERVICES, OU LEUR FIABILITÉ,
            DISPONIBILITÉ, OU CAPACITÉ À RÉPONDRE À VOS BESOINS. NOUS
            FOURNIR LES SERVICES « EN L'ÉTAT ».`,
    TERMS_31: `CERTAINES JURIDICTIONS PREVOYENT CERTAINES GARANTIES,
            COMME LA GARANTIE IMPLICITE DE QUALITÉ MARCHANDE,
            ADAPTATION A UN USAGE PARTICULIER ET
            ABSENCE DE CONTREFAÇON. DANS LA MESURE PERMISE PAR LA LOI, NOUS
            EXCLUENT TOUTES LES GARANTIES.`,
    TERMS_32: `Responsabilité pour nos Services`,
    TERMS_33: `LORSQU'AUTORISÉ PAR LA LOI, LITESTEP ET LITESTEP
            FOURNISSEURS ET DISTRIBUTEURS, NE SERONT PAS RESPONSABLES
            POUR LES PERTES DE PROFITS, DE REVENUS OU DE DONNÉES, FINANCIÈRES
            PERTES INDIRECTES, SPÉCIALES, CONSÉCUTIVES,
            DOMMAGES EXEMPLAIRES OU PUNITIFS.`,
    TERMS_34: `DANS LA MESURE AUTORISÉE PAR LA LOI, LA RESPONSABILITÉ TOTALE
            DE LITESTEP, ET DE SES FOURNISSEURS ET DISTRIBUTEURS, POUR
            TOUTE RÉCLAMATION EN VERTU DE CES CONDITIONS, Y COMPRIS POUR TOUT
            LES GARANTIES IMPLICITES SONT LIMITÉES AU MONTANT QUE VOUS
            NOUS A PAYÉS POUR UTILISER LES SERVICES (OU, SI NOUS LE CHOISISSONS, POUR
            VOUS FOURNIR DE NOUVEAU LES SERVICES).`,
    TERMS_35: `DANS TOUS LES CAS, LITESTEP, SES FOURNISSEURS ET
            LES DISTRIBUTEURS NE SERONT PAS RESPONSABLES DE TOUTE PERTE OU
            DOMMAGES QUI NE SONT PAS RAISONNABLEMENT PRÉVISIBLES.`,
    TERMS_36: `Utilisations commerciales de nos services`,
    TERMS_37: `Si vous utilisez nos Services pour le compte d'une entreprise,
            que l'entreprise accepte ces conditions. Il tiendra inoffensif
            et indemniser LiteStep et ses sociétés affiliées, dirigeants,
            agents et employés de toute réclamation, poursuite ou action
            découlant de ou liés à l'utilisation des Services ou
            violation de ces termes, y compris toute responsabilité ou
            dépenses résultant de réclamations, pertes, dommages, poursuites,
            jugements, frais de justice et honoraires d'avocat.`,
    TERMS_38: `À propos de ces conditions`,
    TERMS_39: `Nous pouvons modifier ces conditions ou services à tout moment. Bien
            publier un avis de modification des présentes conditions générales
            sur cette page. Nous publierons un avis de modifications supplémentaires
            conditions du service applicable. Les modifications ne s'appliqueront pas
            rétroactivement et entrera en vigueur au plus tôt
            quatorze jours après leur mise en ligne. Cependant, des changements
            aborder de nouvelles fonctions pour un service ou des modifications apportées
            pour des raisons juridiques entrera en vigueur immédiatement. Si vous
            n'acceptez pas les conditions modifiées d'un Service, vous
            devez cesser d'utiliser ce service.`,
    TERMS_40: `En cas de conflit entre ces termes et les
            termes supplémentaires, les termes supplémentaires contrôleront pour
            ce conflit.`,
    TERMS_41: `Ces termes contrôlent la relation entre LiteStep
            et tu. Ils ne créent aucun tiers bénéficiaire
            droits.`,
    TERMS_42: `Si vous ne respectez pas ces conditions et que nous ne prenons pas
            agir tout de suite, cela ne signifie pas que nous donnons
            tous les droits que nous pourrions avoir (tels que prendre des mesures dans
            l'avenir).`,
    TERMS_43: `S'il s'avère qu'un terme particulier n'est pas
            exécutoire, cela n'affectera pas les autres conditions.`,
    TERMS_44: `Les lois du Maryland, États-Unis, s'appliqueront à tout litige
            découlant de ou liés à ces conditions ou à la
            Prestations de service. Toutes les réclamations découlant de ou liées à ces
            termes ou les Services seront litigieux exclusivement dans
            les tribunaux fédéraux ou d'État du Maryland, aux États-Unis, et vous
            et LiteStep consentent à la juridiction personnelle dans ces
            tribunaux.`,
  },
  de: {
    // German
    // components/Header.tsx
    TITLE: "PocketBills",
    ADD_BILL: "Rechnung hinzufügen",

    // components/Stats.tsx
    DUE: "Fällig",
    OVERDUE: "Überfällig",
    PAID: "Bezahlt",
    TOTAL_DUE: "Gesamt fällig",
    TOTAL_PAID: "Gesamt bezahlt",

    // components/Search.tsx
    SEARCH_PLACEHOLDER: "Rechnung suchen",

    // components/BillList.tsx
    BILL_NO_SEARCH: "Keine Suchergebnisse",
    BILL_COLLAPSE: "Zusammenbruch",
    BILL_EXPAND: "Alle erweitern",
    BILL_BILLS: "Rechnungen",

    // components/BillItem.tsx
    ALERT_HEADER: "Rechnung aktualisieren",
    ALERT_PLACEHOLDER_1: "Rechnungsname",
    ALERT_PLACEHOLDER_2: "Rechnungskategorie",
    ALERT_PLACEHOLDER_3: "Mindestbetrag fällig",
    ALERT_CANCEL: "Stornieren",
    ALERT_OKAY: "Okay",
    ARCHIVE: "Archiv",
    UNARCHIVE: "Unarchiv",
    UPDATE: "Aktualisieren",
    DELETE: "Löschen",
    TAX_DEDUCTIBLE: "Steuerlich absetzbar",

    // components/Sidemenu.tsx
    HOME: "Zuhause",
    PRIVACY_POLICY: "Datenschutz-Bestimmungen",
    TERMS_OF_USE: "Nutzungsbedingungen",
    CLEAR_DATA: "Daten löschen",
    REMOVE_ALL_DATA: "Alle Daten entfernen",
    RESET_SUBHEADER: "Bist du sicher?",

    // components/AddModal.tsx
    REQUIRED_NAME: "Name ist erforderlich",
    REQUIRED_CATEGORY: "Kategorie ist erforderlich",
    REQUIRED_AMOUNT: "Der geschuldete Betrag muss größer als 0 sein",
    REQUIRED_DATE: "Datum ist erforderlich",
    PLACEHOLDER_NAME: "Rechnungsname",
    PLACEHOLDER_CATEGORY: "Rechnungskategorie",
    PLACEHOLDER_AMOUNT: "Geschuldeter Betrag",
    INPUT_REQUIRED: "erforderlich",

    // pages/Home.tsx
    DUE_TODAY: "Rechnung heute fällig",
    DUE_WEEK: "Rechnung fällig in einer Woche",
    DUE_PASTDUE: "Die Rechnung ist überfällig",
    DUE_YOUR: "Dein",
    DUE_BILL_TODAY: "Rechnung ist heute fällig",
    DUE_BILL_WEEK: "die Rechnung ist in einer Woche fällig",
    DUE_BILL_PASTDUE: "Rechnung ist überfällig",
    BILL_UPDATED: "Bill wurde erfolgreich aktualisiert",
    BILL_PAST_DIVIDER: "Überfällige Rechnungen",
    BILL_TODAY_DIVIDER: "Heute fällige Rechnungen",
    BILL_UPCOMING_DIVIDER: "Kommende Rechnungen",
    BILL_PAID_DIVIDER: "Bezahlte Rechnungen",
    BILL_TAX_DIVIDER: "Steuerlich absetzbare Rechnungen",

    // pages/Privacy.tsx
    PRIVACY_POLICY_TEXT_1: `Diese Datenschutzrichtlinie soll Ihnen helfen zu verstehen, was
            Informationen, die wir sammeln, warum wir sie sammeln und wie Sie
            kann Ihre Informationen aktualisieren, verwalten, exportieren und löschen.`,
    PRIVACY_POLICY_TEXT_2: `INFORMATIONEN, DIE LITESTEP SAMMELT`,
    PRIVACY_POLICY_TEXT_3: `Welche Daten Sie auch immer in der Anwendung erstellen, es ist
            Selbst, Sie haben die volle Kontrolle über. Es sind Ihre Daten zum Hinzufügen,
            Bearbeiten oder löschen. Wenn Sie keine speichern möchten
            Informationen, löschen Sie sie einfach aus der Anwendung. Wir
            Ich möchte, dass Sie verstehen, dass Sie die Kontrolle über Ihre haben
            Daten.`,
    PRIVACY_POLICY_TEXT_4: `Dinge, die Sie erstellen oder uns zur Verfügung stellen`,
    PRIVACY_POLICY_TEXT_5: `Wenn Sie ein LiteStep-Konto erstellen, stellen Sie uns dies zur Verfügung
            personenbezogene Daten, die Ihren Namen und eine E-Mail-Adresse enthalten`,
    PRIVACY_POLICY_TEXT_6: `Die Inhalte, die Sie mit der Anwendung hinzufügen, sind Ihre eigenen.
            Wir übernehmen kein Eigentum an den von Ihnen eingegebenen Informationen
            in die Anwendung.`,
    PRIVACY_POLICY_TEXT_7: `Informationen, die wir sammeln, wenn Sie unsere Dienste nutzen`,
    PRIVACY_POLICY_TEXT_8: `Wir können Absturz- oder Fehlerberichte sammeln, die von gesendet werden
            Anwendung während der Nutzung.`,
    PRIVACY_POLICY_TEXT_9: `Wir sammeln diese Informationen, wenn ein LiteStep-Dienst eingeschaltet ist
            Ihr Gerät kontaktiert unsere Server – zum Beispiel, wenn Sie
            eine App aus dem IOS App Store oder bei einem Dienst installieren
            sucht nach automatischen Updates.`,
    PRIVACY_POLICY_TEXT_10: `WARUM LITESTEP DATEN ERHEBT`,
    PRIVACY_POLICY_TEXT_11: `Wir verwenden Ihre Informationen, um sicherzustellen, dass unsere Dienste verfügbar sind
            bestimmungsgemäßes Funktionieren, z. B. Verfolgung von Ausfällen oder
            Fehlerbehebung bei Problemen, die uns gemeldet werden. Wir gebrauchen
            diese Informationen, um unsere Dienste zu verbessern.`,
    PRIVACY_POLICY_TEXT_12: `Wir verwenden die von uns gesammelten Informationen in bestehenden Diensten
            um uns zu helfen, neue zu entwickeln. Wir verwenden die Informationen, die wir
            sammeln, um personalisierte Inhalte bereitzustellen.`,
    PRIVACY_POLICY_TEXT_13: `Wir geben keine Informationen weiter, die Sie persönlich identifizieren
            Sie mit Werbetreibenden wie Ihrem Namen oder Ihrer E-Mail-Adresse.`,
    PRIVACY_POLICY_TEXT_14: `Wir verwenden Daten für Analysen und Messungen, um sie zu verstehen
            wie unsere Dienste genutzt werden. Beispielsweise analysieren wir Daten
            über Ihre Besuche auf unseren Websites, um Dinge zu tun wie z
            Produktdesign optimieren. Dazu verwenden wir verschiedene Tools
            dies, einschließlich Google Analytics.`,

    // pages/Terms.tsx
    TERMS_1: `Willkommen bei LiteStep!`,
    TERMS_2: `Vielen Dank, dass Sie unsere Produkte und Dienstleistungen nutzen. Die Dienste
            werden von LiteStep bereitgestellt.`,
    TERMS_3: `Durch die Nutzung unserer Dienste stimmen Sie diesen Bedingungen zu.
            Bitte lesen Sie diese sorgfältig durch.`,
    TERMS_4: `Nutzung unserer Dienste`,
    TERMS_5: `Sie müssen alle Ihnen zur Verfügung gestellten Richtlinien befolgen
            innerhalb der Dienste.`,
    TERMS_6: `Missbrauchen Sie unsere Dienste nicht. Versuchen Sie nicht, auf unsere zuzugreifen
            Dienste, die eine andere Methode als die Schnittstelle und verwenden
            die bereitgestellten Anweisungen. Sie dürfen nur unsere Dienste nutzen
            wie gesetzlich zulässig, einschließlich anwendbarer Export- und
            Gesetze und Vorschriften zur Wiederausfuhrkontrolle. Wir können aussetzen
            oder stellen Sie die Bereitstellung unserer Dienste für Sie ein, wenn Sie dies nicht tun
            unsere Allgemeinen Geschäftsbedingungen oder Richtlinien einhalten oder wenn
            Wir untersuchen mutmaßliches Fehlverhalten.`,
    TERMS_7: `Die Nutzung unserer Dienste gibt Ihnen kein Eigentum an irgendwelchen
            geistige Eigentumsrechte an unseren Diensten oder den
            Inhalte, auf die Sie zugreifen. Sie dürfen Inhalte von unseren nicht wiederverwenden
            Dienstleistungen, sofern keine Genehmigung erteilt wurde oder anderweitig vorliegt
            gesetzlich erlaubt. Diese Bedingungen gewähren Ihnen kein Recht
            in unseren Diensten verwendete Marken oder Logos zu verwenden. Nicht
            rechtliche Hinweise, die in angezeigt werden, zu entfernen, unkenntlich zu machen oder zu ändern
            oder zusammen mit unseren Dienstleistungen.`,
    TERMS_8: `Für die bereitgestellten Inhalte ist ausschließlich der verantwortlich
            Entität, die es zur Verfügung stellt. Wir können Inhalte überprüfen, um
            festzustellen, ob es illegal ist oder gegen unsere verstößt
            Richtlinien können wir Inhalte entfernen oder deren Anzeige verweigern
            von denen wir vernünftigerweise annehmen, dass sie gegen unsere Richtlinien verstoßen oder die
            Gesetz.`,
    TERMS_9: `Im Zusammenhang mit Ihrer Nutzung der Dienste senden wir ggf
            Sie Service-Ankündigungen, administrative Nachrichten und
            andere Informationen. Sie können einige davon ablehnen
            Kommunikation.`,
    TERMS_10: `Verwenden Sie solche Dienste nicht auf eine Weise, die Sie ablenkt und
            hindert Sie daran, Verkehrs- oder Sicherheitsvorschriften einzuhalten.`,
    TERMS_11: `Ihr Benutzerkonto`,
    TERMS_12: `Sie benötigen ein Benutzerkonto, um unsere zu nutzen
            Dienstleistungen. Sie können Ihr eigenes Konto erstellen, oder Sie können
            Verwenden Sie dazu entweder ein Apple-, Google- oder Facebook-Konto
            Anmeldung.`,
    TERMS_13: `Um Ihr LiteStep-Konto zu schützen, bewahren Sie Ihr Passwort auf
            vertraulich. Sie sind für die Aktivität verantwortlich, die
            geschieht in Ihrem LiteStep-Konto.`,
    TERMS_14: `Datenschutz und Urheberrechtsschutz`,
    TERMS_15: `Unsere Datenschutzrichtlinie erläutert, wie wir Ihre personenbezogenen Daten behandeln
            Daten und schützen Sie Ihre Privatsphäre, wenn Sie unsere Dienste nutzen.
            Durch die Nutzung unserer Dienste stimmen Sie zu, dass LiteStep diese verwenden kann
            solche Daten in Übereinstimmung mit unseren Datenschutzrichtlinien.`,
    TERMS_16: `Wir reagieren auf Hinweise auf mutmaßliche Urheberrechtsverletzungen
            und Konten von Wiederholungstätern gemäß kündigen
            den im U.S. Digital Millennium festgelegten Prozess
            Urheberrechtsgesetz.`,
    TERMS_17: `Ihre Inhalte in unseren Diensten`,
    TERMS_18: `Unsere Dienste ermöglichen es Ihnen, hochzuladen, einzureichen, zu speichern, zu senden oder
            Inhalte erhalten. Sie behalten das Eigentum an allen
            geistige Eigentumsrechte, die Sie daran halten
            Inhalt.`,
    TERMS_19: `Wenn Sie Inhalte hochladen, übermitteln, speichern, senden oder empfangen
            zu oder über unsere Dienste geben Sie LiteStep (und diese
            wir arbeiten mit) eine weltweite Lizenz zur Nutzung, zum Hosten, Speichern,
            reproduzieren, modifizieren, abgeleitete Werke erstellen (wie z
            solche, die sich aus Übersetzungen, Anpassungen oder anderem ergeben
            Änderungen, die wir vornehmen, damit Ihre Inhalte besser funktionieren
            unsere Dienste), kommunizieren, veröffentlichen, öffentlich aufführen,
            solche Inhalte öffentlich anzuzeigen und zu verbreiten. Die Rechte
            Sie in dieser Lizenz gewähren, sind für den begrenzten Zweck von
            Betreiben, Bewerben und Verbessern unserer Dienste und um
            neue entwickeln. Diese Lizenz bleibt bestehen, auch wenn Sie
            die Nutzung unserer Dienste einstellen. Einige Dienste können Ihnen angeboten werden
            Möglichkeiten, auf bereitgestellte Inhalte zuzugreifen und diese zu entfernen
            zu diesem Dienst.`,
    TERMS_20: `Weitere Informationen zur Verwendung von LiteStep finden Sie hier
            und speichert Inhalte in der Datenschutzerklärung. Wenn Sie einreichen
            Feedback oder Vorschläge zu unseren Diensten, die wir verwenden können
            Ihr Feedback oder Ihre Vorschläge für Sie unverbindlich.`,
    TERMS_21: `Über Software in unseren Diensten`,
    TERMS_22: `Wenn ein Dienst herunterladbare Dienste erfordert oder enthält
            Software, kann diese Software automatisch auf Ihrem aktualisiert werden
            Gerät, sobald eine neue Version oder Funktion verfügbar ist. Etwas
            Dienste können Ihnen ermöglichen, Ihr automatisches Update anzupassen
            die Einstellungen.`,
    TERMS_23: `LiteStep bietet Ihnen ein persönliches, weltweites, gebührenfreies,
            nicht übertragbare und nicht ausschließliche Lizenz zur Nutzung der
            Software, die Ihnen von LiteStep als Teil der bereitgestellt wird
            Dienstleistungen. Diese Lizenz dient ausschließlich dem Zweck
            So können Sie die Vorteile von nutzen und genießen
            Dienstleistungen, wie sie von LiteStep bereitgestellt werden, in der Art und Weise
            durch diese Bedingungen gestattet. Sie dürfen nicht kopieren, modifizieren,
            einen Teil unserer Dienste vertreiben, verkaufen oder vermieten oder
            enthaltene Software, noch dürfen Sie Reverse Engineering oder
            versuchen, den Quellcode dieser Software zu extrahieren,
            es sei denn, Gesetze verbieten diese Beschränkungen oder Sie haben unsere
            schriftliche Erlaubnis.`,
    TERMS_24: `Änderung und Beendigung unserer Dienste`,
    TERMS_25: `Wir ändern und verbessern unsere Dienste ständig.
            Wir können Funktionalitäten oder Merkmale hinzufügen oder entfernen, und wir
            kann einen Dienst insgesamt aussetzen oder stoppen.`,
    TERMS_26: `Sie können die Nutzung unserer Dienste jedoch jederzeit beenden
            Es tut uns leid, Sie gehen zu sehen. LiteStep kann auch stoppen
            Bereitstellung von Diensten für Sie oder Hinzufügen oder Erstellen neuer Limits
            zu unseren Diensten jederzeit.`,
    TERMS_27: `Wir glauben, dass Sie Ihre Daten besitzen und Ihre Daten schützen
            Der Zugang zu solchen Daten ist wichtig. Wenn wir a
            Service, wo vernünftigerweise möglich, werden wir Ihnen geben
            angemessene Vorankündigung und eine Chance zu bekommen
            Informationen aus diesem Dienst.`,
    TERMS_28: `Unsere Garantien und Haftungsausschlüsse`,
    TERMS_29: `Wir erbringen unsere Dienstleistungen in wirtschaftlich angemessener Weise
            Niveau an Können und Sorgfalt und wir hoffen, dass Sie es genießen werden
            benutze sie. Aber es gibt bestimmte Dinge, die wir nicht tun
            Versprechen über unsere Dienstleistungen.`,
    TERMS_30: `ANDER ALS AUSDRÜCKLICH IN DIESEN BEDINGUNGEN DARGESTELLT ODER
            ZUSÄTZLICHE BEDINGUNGEN, WEDER LITESTEP NOCH SEINE LIEFERANTEN
            ODER DISTRIBUTOREN MACHEN SPEZIFISCHE VERSPRECHEN HINSICHTLICH DER
            DIENSTLEISTUNGEN. BEISPIELSWEISE GEHEN WIR KEINE VERPFLICHTUNGEN EIN
            ÜBER DEN INHALT INNERHALB DER DIENSTE, DIE SPEZIFISCHEN
            FUNKTIONEN DER DIENSTE ODER IHRE ZUVERLÄSSIGKEIT,
            VERFÜGBARKEIT ODER FÄHIGKEIT, IHRE BEDÜRFNISSE ZU ERFÜLLEN. WIR
            DIE DIENSTE „WIE BESEHEN“ BEREITSTELLEN.`,
    TERMS_31: `EINIGE GERICHTSBARKEITEN GEBEN BESTIMMTE GEWÄHRLEISTUNGEN VOR,
            WIE DIE STILLSCHWEIGENDE GEWÄHRLEISTUNG DER MARKTGÄNGIGKEIT,
            EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND
            NICHTVERLETZUNG. SOWEIT GESETZLICH ZULÄSSIG, WIR
            SCHLIESSEN SIE ALLE GEWÄHRLEISTUNGEN AUS.`,
    TERMS_32: `Haftung für unsere Dienste`,
    TERMS_33: `WENN GESETZLICH ZULÄSSIG, LITESTEP UND LITESTEPS
            LIEFERANTEN UND HÄNDLER ÜBERNEHMEN KEINE VERANTWORTUNG
            FÜR ENTGANGENEN GEWINN, EINNAHMEN ODER DATEN, FINANZIELLEN
            VERLUSTE ODER INDIREKTE, BESONDERE, FOLGESCHÄDEN,
            BEISPIELHAFTER ODER STRAFSCHADENSERSATZ.`,
    TERMS_34: `SOWEIT GESETZLICH ZULÄSSIG, DIE GESAMTHAFTUNG
            VON LITESTEP UND IHREN LIEFERANTEN UND VERTRIEBSPARTNERN FÜR
            JEGLICHE ANSPRÜCHE GEMÄSS DIESEN BEDINGUNGEN, EINSCHLIESSLICH FÜR JEGLICHE
            STILLSCHWEIGENDE GEWÄHRLEISTUNGEN, IST AUF DEN BETRAG BEGRENZT, DEN SIE
            UNS FÜR DIE NUTZUNG DER DIENSTE BEZAHLT HABEN (ODER, WENN WIR WÄHLEN, FÜR
            IHNEN DIE DIENSTLEISTUNGEN WIEDER BEREITSTELLEN).`,
    TERMS_35: `IN ALLEN FÄLLEN LITESTEP UND SEINE LIEFERANTEN UND
            HÄNDLER HAFTET NICHT FÜR VERLUSTE ODER
            SCHÄDEN, DIE NICHT VERNÜNFTIG VORHERSEHBAR SIND.`,
    TERMS_36: `Geschäftliche Nutzung unserer Dienste`,
    TERMS_37: `Wenn Sie unsere Dienste im Namen eines Unternehmens nutzen,
            dass das Unternehmen diese Bedingungen akzeptiert. Es wird harmlos bleiben
            und LiteStep und seine verbundenen Unternehmen, leitenden Angestellten,
            Agenten und Mitarbeiter von jeglichen Ansprüchen, Klagen oder Klagen
            die sich aus oder im Zusammenhang mit der Nutzung der Dienste ergeben oder
            Verletzung dieser Bedingungen, einschließlich jeglicher Haftung oder
            Aufwendungen aus Ansprüchen, Verlusten, Schäden, Klagen,
            Urteile, Gerichts- und Anwaltskosten.`,
    TERMS_38: `Über diese Bedingungen`,
    TERMS_39: `Wir können diese Bedingungen oder Dienste jederzeit ändern. Brunnen
            Mitteilung über Änderungen an diesen Bedingungen und Diensten veröffentlichen
            auf dieser Seite. Wir werden eine Benachrichtigung über geänderte Zusatzinformationen veröffentlichen
            Bedingungen im jeweiligen Dienst. Änderungen werden nicht übernommen
            rückwirkend und treten frühestens in Kraft
            vierzehn Tage nach der Veröffentlichung. Änderungen jedoch
            Adressierung neuer Funktionen für einen Dienst oder vorgenommene Änderungen
            aus rechtlichen Gründen werden sofort wirksam. Wenn du
            Sie stimmen den geänderten Bedingungen für einen Dienst nicht zu
            sollte Ihre Nutzung dieses Dienstes einstellen.`,
    TERMS_40: `Im Falle eines Widerspruchs zwischen diesen Bedingungen und den
            zusätzliche Bedingungen gelten die zusätzlichen Bedingungen
            dieser Konflikt.`,
    TERMS_41: `Diese Bedingungen regeln die Beziehung zwischen LiteStep
            Und Sie. Sie schaffen keinen Drittbegünstigten
            Rechte.`,
    TERMS_42: `Wenn Sie diese Bedingungen nicht einhalten, übernehmen wir diese nicht
            Handeln Sie sofort, das bedeutet nicht, dass wir geben
            alle Rechte geltend machen, die wir möglicherweise haben (z. B. das Ergreifen von Maßnahmen in
            die Zukunft).`,
    TERMS_43: `Wenn sich herausstellt, dass ein bestimmter Begriff das nicht ist
            vollstreckbar sind, berührt dies keine anderen Bedingungen.`,
    TERMS_44: `Für alle Streitigkeiten gelten die Gesetze von Maryland, USA
            die sich aus oder im Zusammenhang mit diesen Bedingungen oder den
            Dienstleistungen. Alle Ansprüche aus oder im Zusammenhang mit diesen
            Bedingungen oder die Dienste werden ausschließlich in Rechtsstreitigkeiten verhandelt
            die Bundes- oder Staatsgerichte von Maryland, USA, und Sie
            und LiteStep stimmen der persönlichen Gerichtsbarkeit in diesen Fällen zu
            Gerichte.`,
  },
});
