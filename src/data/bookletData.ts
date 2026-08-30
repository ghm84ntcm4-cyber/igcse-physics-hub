export interface BookletChapter {
  id: string;
  chapterNumber: string;
  titleEn: string;
  titleAr: string;
  syllabusRef: string;
  keyOverview: string;
  keyOverviewAr: string;
  coreFormulas: {
    name: string;
    equation: string;
    meaningAr: string;
    units: string;
  }[];
  mustKnowDefinitions: {
    term: string;
    termAr: string;
    definition: string;
    definitionAr: string;
    markSchemeKeywords: string[];
  }[];
  detailedTheory: {
    topicHeading: string;
    topicHeadingAr: string;
    content: string[];
    contentAr: string[];
    examinerWarning?: string;
  }[];
  workedProblems: {
    title: string;
    question: string;
    given: string;
    formula: string;
    solutionSteps: string[];
    finalAnswer: string;
    teacherInsightAr: string;
  }[];
  paper6PracticalKey?: {
    experimentName: string;
    apparatus: string[];
    independentVar: string;
    dependentVar: string;
    controlVars: string[];
    precautionAndAccuracy: string[];
    graphMethod: string;
  };
}

export interface BookletUnit {
  unitId: string;
  unitNumber: number;
  blockTitleEn: string;
  blockTitleAr: string;
  colorTheme: string;
  chapters: BookletChapter[];
}

export const MASTER_BOOKLET_DATA: BookletUnit[] = [
  {
    unitId: "block-1",
    unitNumber: 1,
    blockTitleEn: "Block 1: General Physics & Mechanics",
    blockTitleAr: "الوحدة الأولى: الفيزياء العامة، الميكانيكا والطاقة",
    colorTheme: "from-blue-600 to-cyan-500",
    chapters: [
      {
        id: "b1-ch1",
        chapterNumber: "Chapter 1",
        titleEn: "Making Measurements (Length, Volume, Time & Density)",
        titleAr: "القياسات الفيزيائية، الأبعاد، الزمن، والكثافة",
        syllabusRef: "Cambridge 1.1 / 1.2 / 1.3 / 1.4",
        keyOverview:
          "Measurement is the foundation of physics. Precision, error reduction (avoiding parallax), calculating averages for small quantities, and determining the density of regular and irregular solids.",
        keyOverviewAr:
          "أساس علم الفيزياء هو القياس الدقيق للأطوال، الحجوم، والزمن، وتفادي أخطاء القراءة (Parallax error) وحساب الكثافة للأجسام المنتظمة وغير المنتظمة باستخدام طريقة الإزاحة (Displacement method).",
        coreFormulas: [
          {
            name: "Density Formula",
            equation: "ρ = m / V",
            meaningAr: "الكثافة = الكتلة / الحجم",
            units: "kg/m³ or g/cm³ (1 g/cm³ = 1000 kg/m³)",
          },
          {
            name: "Period of a Simple Pendulum",
            equation: "T = t_total / N",
            meaningAr: "الزمن الدوري = الزمن الكلي مقسوماً على عدد الاهتزازات الكاملة",
            units: "Seconds (s)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Density",
            termAr: "الكثافة",
            definition: "The mass per unit volume of a substance.",
            definitionAr: "كتلة وحدة الحجوم من المادة.",
            markSchemeKeywords: ["mass per unit volume", "ratio of mass to volume"],
          },
          {
            term: "Period (of oscillation)",
            termAr: "الزمن الدوري",
            definition: "The time taken for one complete oscillation or swing to and fro.",
            definitionAr: "الزمن اللازم لإكمال دورة أو اهتزازة كاملة ذهاباً وإياباً.",
            markSchemeKeywords: ["time for one complete oscillation"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Precision of Measuring Instruments & Paper 6 Rules",
            topicHeadingAr: "دقة أدوات القياس وتجنب الأخطاء المعملية",
            content: [
              "Meter Ruler: Measures to the nearest 1 mm (0.1 cm). Position line of sight perpendicular to scale to eliminate parallax error.",
              "Vernier Caliper: Measures diameters and lengths to ±0.1 mm (0.01 cm). Read main scale + vernier coincident line.",
              "Micrometer Screw Gauge: Measures tiny thicknesses (wire diameter, foil) to ±0.01 mm. Check for zero error when fully closed.",
              "Measuring Cylinder: Read at eye-level from the bottom of the meniscus.",
            ],
            contentAr: [
              "المسطرة المترية: تقيس بدقة 1 ملم (0.1 سم)؛ يجب وضع خط الرؤية عمودياً على التدريج لتفادي خطأ زاوية الرؤية (Parallax error).",
              "القدمة ذات الورنية (Vernier Caliper): تقيس الأقطار الداخلية والخارجية بدقة 0.1 ملم (0.01 سم).",
              "الميكرومتر (Micrometer Screw Gauge): يقيس السماكات الدقيقة مثل قطر السلك بدقة 0.01 ملم، مع فحص الخطأ الصفري أولاً.",
              "المخبار المدرج: يُقرأ دائماً بمستوى العين عند أسفل سطح السائل المقعر (Bottom of the meniscus).",
            ],
            examinerWarning:
              "In Paper 6, always state that you repeat measurements at different positions and calculate the mean/average.",
          },
          {
            topicHeading: "Measuring Small Quantities (Multiple Measurement Technique)",
            topicHeadingAr: "تقنية القياس المتعدد للأبعاد والأزمنة المتناهية الصغر",
            content: [
              "Sheet Thickness: Measure the total thickness of 500 identical sheets with a ruler/micrometer, then divide by 500.",
              "Wire Diameter: Wind 20 tight turns around a pencil, measure total length with a ruler, and divide by 20.",
              "Pendulum Period: Time 20 complete swings with a stopwatch, then divide total time by 20 to minimize reaction time error (≈ 0.2 s).",
            ],
            contentAr: [
              "سماكة ورقة واحدة: نقيس سماكة رزمة من 500 ورقة معاً ثم نقسم الناتج على 500.",
              "قطر سلك رفيع: نلف 20 لفة متلاصقة حول قلم رصاص ونقيس الطول الكلي ثم نقسم على 20.",
              "الزمن الدوري للبندول: نقيس زمن 20 اهتزازة كاملة ثم نقسم على 20 لتقليل خطأ سرعة رد فعل الإنسان.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Calculating Density of an Irregular Solid",
            question:
              "A student places an irregular rock of mass 144 g into a measuring cylinder containing 80 cm³ of water. The water level rises to 124 cm³. Calculate the density of the rock.",
            given: "Mass m = 144 g, Initial volume V1 = 80 cm³, Final volume V2 = 124 cm³",
            formula: "Volume of rock V = V2 - V1; Density ρ = m / V",
            solutionSteps: [
              "Step 1: Calculate Volume of rock: V = 124 - 80 = 44 cm³",
              "Step 2: Apply density formula: ρ = 144 g / 44 cm³ = 3.27 g/cm³",
              "Step 3: In SI units: 3.27 × 1000 = 3270 kg/m³",
            ],
            finalAnswer: "3.27 g/cm³ (or 3270 kg/m³)",
            teacherInsightAr:
              "تأكد دائماً من كتابة الوحدة بعد الرقم (g/cm³ أو kg/m³)، واطرح الحجم الابتدائي من الحجم النهائي بعناية.",
          },
        ],
        paper6PracticalKey: {
          experimentName: "Determining Density by Displacement Method",
          apparatus: ["Electronic balance", "Measuring cylinder", "Water", "Thin thread", "Irregular solid"],
          independentVar: "Different solid samples",
          dependentVar: "Volume displaced and measured mass",
          controlVars: ["Water temperature", "Pure liquid medium"],
          precautionAndAccuracy: [
            "Ensure the solid is fully submerged without touching the bottom or sides.",
            "Lower solid gently using a thin string to prevent splashing water out.",
            "Read the volume from the bottom of the meniscus at direct eye level to avoid parallax error.",
          ],
          graphMethod: "Plot Mass (y-axis) vs Volume (x-axis); the gradient of the line of best fit equals the density.",
        },
      },
      {
        id: "b1-ch2",
        chapterNumber: "Chapter 2",
        titleEn: "Describing Motion & Kinematics Graphs",
        titleAr: "وصف الحركة، السرعة، التسارع، وتحليل المنحنيات البيانية",
        syllabusRef: "Cambridge 1.2 Kinematics",
        keyOverview:
          "Speed vs Velocity, Acceleration, Distance-Time and Speed-Time graphs. Calculating gradient for speed/acceleration and area under speed-time graph for total distance.",
        keyOverviewAr:
          "الفرق بين السرعة القياسية والسرعة المتجهة، مفهوم التسارع، قراءة منحنيات (المسافة-الزمن) و(السرعة-الزمن)، وحساب المساحة تحت منحنى السرعة لإيجاد المسافة المقطوعة.",
        coreFormulas: [
          {
            name: "Average Speed",
            equation: "v = d / t",
            meaningAr: "متوسط السرعة = المسافة المقطوعة / الزمن المستغرق",
            units: "m/s",
          },
          {
            name: "Acceleration",
            equation: "a = (v - u) / t = Δv / Δt",
            meaningAr: "التسارع = (السرعة النهائية - السرعة الابتدائية) / الزمن",
            units: "m/s²",
          },
          {
            name: "Distance from Speed-Time Graph",
            equation: "Distance = Area under speed-time graph",
            meaningAr: "المسافة الكلية = المساحة المحصورة تحت منحنى (السرعة - الزمن)",
            units: "Meters (m)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Speed",
            termAr: "السرعة القياسية",
            definition: "The distance travelled per unit time (scalar quantity).",
            definitionAr: "المسافة المقطوعة خلال وحدة الزمن (كمية قياسية).",
            markSchemeKeywords: ["distance travelled per unit time"],
          },
          {
            term: "Velocity",
            termAr: "السرعة المتجهة",
            definition: "The speed of an object in a specified direction (vector quantity).",
            definitionAr: "سرعة الجسم في اتجاه محدد (كمية متجهة).",
            markSchemeKeywords: ["speed in a given direction", "rate of change of displacement"],
          },
          {
            term: "Acceleration",
            termAr: "التسارع (العجلة)",
            definition: "The rate of change of velocity per unit time.",
            definitionAr: "معدل تغير السرعة المتجهة بالنسبة للزمن.",
            markSchemeKeywords: ["rate of change of velocity", "change in velocity per unit time"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Interpreting Distance-Time & Speed-Time Graphs",
            topicHeadingAr: "قواعد قراءة المنحنيات البيانية للحركة في امتحانات كامبريدج",
            content: [
              "Distance-Time Graph: Gradient (slope) = Speed. Horizontal line = Object is stationary (speed = 0). Straight upward line = Constant steady speed.",
              "Speed-Time Graph: Gradient (slope) = Acceleration. Horizontal line = Constant speed (acceleration = 0). Downward sloping straight line = Constant deceleration.",
              "Area under Speed-Time Graph: Split into rectangles (width × height) and triangles (½ × base × height) to get total distance moved.",
            ],
            contentAr: [
              "منحنى (المسافة - الزمن): ميل الخط المستقيم يمثل السرعة. الخط الأفقي يعني أن الجسم ساكن.",
              "منحنى (السرعة - الزمن): ميل الخط يمثل التسارع (العجلة). الخط الأفقي يعني سرعة ثابتة (تسارع = 0).",
              "المساحة تحت منحنى (السرعة - الزمن): تقسم إلى مستطيلات ومثلثات، ومجموع مساحاتها يعطي المسافة الكلية المقطوعة بدقة.",
            ],
            examinerWarning:
              "Never confuse a distance-time graph with a speed-time graph! Always check the y-axis label before answering.",
          },
        ],
        workedProblems: [
          {
            title: "Distance from Trapezium Speed-Time Graph",
            question:
              "A train accelerates uniformly from rest to 20 m/s in 10 s, travels at constant speed for 40 s, and then decelerates to rest in 10 s. Calculate the total distance travelled.",
            given: "u = 0, v_max = 20 m/s, t_acc = 10 s, t_const = 40 s, t_dec = 10 s, total time = 60 s",
            formula: "Total Distance = Area under graph = Area(Triangle 1) + Area(Rectangle) + Area(Triangle 2)",
            solutionSteps: [
              "Stage 1 (Acceleration): Area = ½ × 10 s × 20 m/s = 100 m",
              "Stage 2 (Constant Speed): Area = 40 s × 20 m/s = 800 m",
              "Stage 3 (Deceleration): Area = ½ × 10 s × 20 m/s = 100 m",
              "Total Distance = 100 + 800 + 100 = 1000 m (1 km)",
            ],
            finalAnswer: "1000 m",
            teacherInsightAr:
              "يمكنك أيضاً استخدام قانون شبه المنحرف مباشرة: Area = ½ × (a + b) × h = ½ × (40 + 60) × 20 = 1000 m.",
          },
        ],
      },
      {
        id: "b1-ch3",
        chapterNumber: "Chapter 3",
        titleEn: "Forces, Mass, Weight & Terminal Velocity",
        titleAr: "القوى، الكتلة، الوزن، والسقوط الحر والسرعة الحدية",
        syllabusRef: "Cambridge 1.3 Forces & Motion",
        keyOverview:
          "Resultant forces, Newton's second law (F = ma), distinguishing mass from weight (W = mg), terminal velocity in fluids, and scalar vs vector quantities.",
        keyOverviewAr:
          "محصلة القوى، قانون نيوتن الثاني (F = ma)، الفرق بين الكتلة والوزن (W = mg)، مراحل السقوط الحر حتى الوصول للسرعة الحدية (Terminal Velocity)، وقواعد جمع المتجهات.",
        coreFormulas: [
          {
            name: "Newton's Second Law",
            equation: "F_resultant = m × a",
            meaningAr: "محصلة القوة = الكتلة × التسارع",
            units: "Newtons (N)",
          },
          {
            name: "Weight Formula",
            equation: "W = m × g",
            meaningAr: "الوزن = الكتلة × تسارع الجاذبية (g ≈ 9.8 or 10 N/kg)",
            units: "Newtons (N)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Resultant Force",
            termAr: "محصلة القوى",
            definition: "The single overall force that has the same effect as all the individual forces acting on an object combined.",
            definitionAr: "القوة الفردية الوحيدة التي تعطي نفس تأثير جميع القوى المؤثرة مجتمعة على الجسم.",
            markSchemeKeywords: ["single overall force", "combined effect"],
          },
          {
            term: "Mass vs Weight",
            termAr: "الكتلة مقابل الوزن",
            definition: "Mass is the amount of matter in an object and resists change in motion (kg). Weight is the gravitational force acting on an object that has mass (N).",
            definitionAr: "الكتلة هي مقدار المادة ومقاومة الجسم للتغير في حركته (بالكجم)، بينما الوزن هو قوة جذب الجاذبية المؤثرة على الجسم (بالنيوتن).",
            markSchemeKeywords: ["mass: amount of matter / inertia (kg)", "weight: gravitational force (N)"],
          },
          {
            term: "Terminal Velocity",
            termAr: "السرعة الحدية",
            definition: "The constant maximum velocity reached by a falling object when upward drag/air resistance equals the downward weight force (Resultant force = 0).",
            definitionAr: "أقصى سرعة ثابتة يصل إليها الجسم الساقط عندما تتساوى قوة مقاومة الهواء الصاعدة مع وزن الجسم الهابط فتصبح محصلة القوى صفراً.",
            markSchemeKeywords: ["constant maximum velocity", "drag equals weight", "resultant force is zero"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Detailed Stages of a Parachutist's Fall (Terminal Velocity)",
            topicHeadingAr: "مراحل هبوط المظلي والسرعة الحدية خطوة بخطوة",
            content: [
              "1. Initial Jump: Speed = 0, Air resistance = 0. Weight acts downwards → Maximum downward acceleration (g = 9.8 m/s²).",
              "2. Accelerating: As speed increases, upward air resistance increases → Resultant force decreases → Acceleration decreases (still speeding up, but less rapidly).",
              "3. 1st Terminal Velocity: Air resistance equals Weight (F_drag = W) → Resultant force = 0 → Constant terminal velocity (≈ 50 m/s).",
              "4. Parachute Opens: Large surface area causes massive upward drag (F_drag >> W) → Sharp upward resultant force → Rapid deceleration.",
              "5. 2nd Terminal Velocity: Air resistance balances Weight again at much lower safe landing speed (≈ 5 m/s).",
            ],
            contentAr: [
              "1. لحظة القفز: السرعة = 0 ومقاومة الهواء = 0. قوة الوزن فقط تجذب لأسفل → أقصى تسارع (g).",
              "2. أثناء السقوط: بزيادة السرعة تزداد مقاومة الهواء الصاعدة → تقل محصلة القوى ويقل التسارع تدريجياً.",
              "3. السرعة الحدية الأولى: تتساوى مقاومة الهواء مع الوزن (F_drag = W) → محصلة القوى = 0 وتثبت السرعة (حوالي 50 م/ث).",
              "4. فتح المظلة: تزداد مساحة السطح جداً فتصبح مقاومة الهواء أكبر بكثير من الوزن → تباطؤ حاد وسريع.",
              "5. السرعة الحدية الثانية: تتوازن القوى مجدداً عند سرعة هبوط آمنة للهبوط (حوالي 5 م/ث).",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Resultant Force & Acceleration of Rocket",
            question:
              "A rocket of total mass 500 kg has engines that produce an upward thrust of 7000 N. Taking g = 10 N/kg, calculate the upward acceleration of the rocket.",
            given: "Mass m = 500 kg, Thrust = 7000 N, g = 10 N/kg",
            formula: "Weight W = m × g; F_resultant = Thrust - Weight; a = F_resultant / m",
            solutionSteps: [
              "Step 1: Calculate Weight: W = 500 kg × 10 N/kg = 5000 N downwards",
              "Step 2: Calculate Resultant Force: F_net = 7000 N - 5000 N = 2000 N upwards",
              "Step 3: Calculate Acceleration: a = F_net / m = 2000 N / 500 kg = 4.0 m/s²",
            ],
            finalAnswer: "4.0 m/s² upwards",
            teacherInsightAr:
              "خطأ شائع جداً: نسيان طرح وزن الصاروخ (W = mg) من قوة الدفع قبل حساب العجلة.",
          },
        ],
      },
      {
        id: "b1-ch4",
        chapterNumber: "Chapter 4",
        titleEn: "Turning Effects of Forces (Moments & Equilibrium)",
        titleAr: "عزم القوة، مركز الكتلة، وقواعد الاتزان والاستقرار",
        syllabusRef: "Cambridge 1.5 Turning Effect",
        keyOverview:
          "Moment of a force (Force × perpendicular distance), Principle of Moments for balanced beams, center of mass, and conditions for equilibrium.",
        keyOverviewAr:
          "عزم القوة (القوة × المسافة العمودية عن نقطة الارتكاز)، قانون الاتزان وعزم الدوران في اتجاه عقارب الساعة وعكسها، ومركز الكتلة وشروط ثبات الأجسام من الانقلاب.",
        coreFormulas: [
          {
            name: "Moment of a Force",
            equation: "Moment = F × d",
            meaningAr: "العزم = القوة × المسافة العمودية عن نقطة الارتكاز (Pivot)",
            units: "Newton-meters (N m)",
          },
          {
            name: "Principle of Moments (Equilibrium)",
            equation: "Total Clockwise Moments = Total Anticlockwise Moments",
            meaningAr: "مجموع العزوم في اتجاه عقارب الساعة = مجموع العزوم في عكس اتجاه عقارب الساعة",
            units: "N m",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Moment of a Force",
            termAr: "عزم القوة",
            definition: "The turning effect of a force about a pivot, calculated as the force multiplied by the perpendicular distance from the pivot to the line of action of the force.",
            definitionAr: "الأثر الدوراني للقوة حول نقطة ارتكاز، ويحسب بضرب القوة في المسافة العمودية من المحور إلى خط عمل القوة.",
            markSchemeKeywords: ["turning effect", "force multiplied by perpendicular distance from pivot"],
          },
          {
            term: "Conditions for Complete Equilibrium",
            termAr: "شرطا الاتزان التام",
            definition: "1. The resultant force on the object is zero (no linear acceleration). 2. The resultant moment on the object is zero (total clockwise moments = total anticlockwise moments, no rotational acceleration).",
            definitionAr: "1. محصلة القوى الخطية تساوي صفراً. 2. محصلة العزوم الدورانية تساوي صفراً.",
            markSchemeKeywords: ["resultant force is zero", "resultant moment is zero", "no resultant turning effect"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Stability and Centre of Mass",
            topicHeadingAr: "استقرار الأجسام ومركز الكتلة",
            content: [
              "Centre of mass: The single point through which the entire weight of an object appears to act.",
              "Increasing stability: 1. Lower the centre of mass (place heavy weights near base). 2. Widen the base area of support.",
              "Toppling condition: An object will topple over when its line of action of weight falls outside the base of support.",
            ],
            contentAr: [
              "مركز الكتلة: النقطة التي يمكن اعتبار كل كتلة أو وزن الجسم متمركزاً فيها.",
              "زيادة ثبات واستقرار الأجسام: 1. خفض مركز الكتلة لأسفل (وضع أوزان ثقيلة بالقاعدة). 2. زيادة مساحة القاعدة.",
              "شرط الانقلاب: ينقلب الجسم عندما يمر خط عمل وزنه خارج حدود قاعدة الارتكاز.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Balanced Beam with Unknown Force",
            question:
              "A uniform 2.0 m beam is pivoted at its center (1.0 m mark). A 40 N weight hangs at 0.5 m to the left of the pivot. How far to the right of the pivot must a 25 N weight be placed to balance the beam?",
            given: "Left Force F1 = 40 N, d1 = 0.5 m; Right Force F2 = 25 N, d2 = ?",
            formula: "Total Anticlockwise Moment = Total Clockwise Moment; F1 × d1 = F2 × d2",
            solutionSteps: [
              "Step 1: Calculate Anticlockwise Moment: 40 N × 0.5 m = 20 N m",
              "Step 2: Set equal to Clockwise Moment: 25 N × d2 = 20 N m",
              "Step 3: Solve for distance: d2 = 20 / 25 = 0.8 m",
            ],
            finalAnswer: "0.8 m to the right of the pivot",
            teacherInsightAr:
              "إذا كان لوح الارتكاز غير متزن وكان له وزن خاص به، يجب إضافة وزنه عند مركز كتلته (منتصف اللوح).",
          },
        ],
      },
      {
        id: "b1-ch5",
        chapterNumber: "Chapter 5",
        titleEn: "Forces and Matter (Hooke's Law & Pressure)",
        titleAr: "القوى والمادة، قانون هوك، والضغط في المواد الصلبة والموائع",
        syllabusRef: "Cambridge 1.5 Forces & 1.7 Pressure",
        keyOverview:
          "Elastic vs plastic deformation, Hooke's Law (F = kx), Limit of Proportionality, Pressure on solids (p = F/A), and hydrostatic pressure in liquids (p = hρg), barometers and manometers.",
        keyOverviewAr:
          "التشوه المرن واللدن، قانون هوك (F = kx)، حد التناسب (Limit of proportionality)، حساب الضغط (p = F/A)، وضغط عمود السائل (p = hρg)، وأجهزة البارومتر والمانومتر.",
        coreFormulas: [
          {
            name: "Hooke's Law",
            equation: "F = k × x",
            meaningAr: "القوة المؤثرة = ثابت صلابة الزنبرك (k) × الاستطالة (x)",
            units: "N/m or N/cm",
          },
          {
            name: "Solid Pressure",
            equation: "p = F / A",
            meaningAr: "الضغط = القوة العمودية / المساحة",
            units: "Pascals (Pa) or N/m²",
          },
          {
            name: "Hydrostatic Liquid Pressure",
            equation: "Δp = ρ × g × h",
            meaningAr: "ضغط السائل = الكثافة × تسارع الجاذبية × العمق",
            units: "Pascals (Pa)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Hooke's Law",
            termAr: "قانون هوك",
            definition: "The extension of a spring is directly proportional to the stretching load applied, provided the limit of proportionality is not exceeded.",
            definitionAr: "استطالة الزنبرك تتناسب طردياً مع القوة المؤثرة عليه، بشرط عدم تجاوز حد التناسب.",
            markSchemeKeywords: ["extension is directly proportional to load", "limit of proportionality not exceeded"],
          },
          {
            term: "Pressure",
            termAr: "الضغط",
            definition: "The force acting per unit area at right angles to a surface.",
            definitionAr: "القوة العمودية المؤثرة على وحدة المساحات.",
            markSchemeKeywords: ["force per unit area"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Pressure in Liquids & Barometers",
            topicHeadingAr: "الضغط في الموائع وأجهزة قياس الضغط الجوي",
            content: [
              "Liquid Pressure characteristics: Acts equally in all directions; increases directly with depth h and liquid density ρ; independent of container shape or surface area.",
              "Mercury Barometer: Measures atmospheric pressure. Atmospheric pressure supports a column of mercury ≈ 760 mm (76 cm) high in a vacuum tube (≈ 100 kPa or 1.0 × 10⁵ Pa).",
              "U-tube Manometer: Measures difference in pressure between gas supply and atmosphere: Δp = hρg.",
            ],
            contentAr: [
              "خصائص ضغط السوائل: يؤثر بالتساوي في جميع الاتجاهات؛ يزداد طردياً مع زيادة العمق وكثافة السائل، ولا يتأثر بشكل الإناء.",
              "بارومتر الزئبق: يقيس الضغط الجوي بدقة؛ حيث يعادل الضغط الجوي المعتاد ارتفاع عمود زئبق قدره 76 سم (100 كيلو باسكال).",
              "مانومتر الأنبوب ذو الشعبتين (U-tube): يقيس فرق الضغط بين مستودع الغاز والضغط الجوي بناء على فرق الارتفاع h.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Pressure at the Bottom of a Pool",
            question:
              "Calculate the pressure exerted by water at the bottom of a 3.0 m deep swimming pool. (Density of water = 1000 kg/m³, g = 9.8 N/kg).",
            given: "Depth h = 3.0 m, ρ = 1000 kg/m³, g = 9.8 N/kg",
            formula: "p = h × ρ × g",
            solutionSteps: [
              "Step 1: Multiply depth, density, and gravitational field strength:",
              "p = 3.0 m × 1000 kg/m³ × 9.8 N/kg",
              "p = 29,400 Pa (or 29.4 kPa)",
            ],
            finalAnswer: "29.4 kPa (29,400 Pa)",
            teacherInsightAr:
              "إذا طلب السؤال الضغط الكلي (Total Pressure) في قاع المسبح، يجب جمع الضغط الجوي (100,000 Pa) مع ضغط الماء.",
          },
        ],
      },
      {
        id: "b1-ch6",
        chapterNumber: "Chapter 6 & 7 & 8",
        titleEn: "Energy, Work, Power & Energy Resources",
        titleAr: "الشغل، الطاقة، القدرة، ومصادر الطاقة المتجددة وغير المتجددة",
        syllabusRef: "Cambridge 1.8 Energy, Work & Power",
        keyOverview:
          "Forms of energy, law of conservation of energy, kinetic energy (½ mv²), gravitational potential energy (mgh), work done (W = Fd), electrical and mechanical power (P = ΔE/t), and energy efficiency.",
        keyOverviewAr:
          "أشكال ومخازن الطاقة، قانون حفظ الطاقة، حساب طاقة الحركة وطاقة الوضع، الشغل الميكانيكي، القدرة والكفاءة المئوية، ومقارنة مصادر الطاقة المتجددة والشمسية والنووية.",
        coreFormulas: [
          {
            name: "Work Done",
            equation: "W = F × d",
            meaningAr: "الشغل = القوة × المسافة المقطوعة في اتجاه القوة",
            units: "Joules (J)",
          },
          {
            name: "Kinetic Energy",
            equation: "E_k = ½ × m × v²",
            meaningAr: "طاقة الحركة = نصف الكتلة × مربع السرعة",
            units: "Joules (J)",
          },
          {
            name: "Gravitational Potential Energy",
            equation: "ΔE_p = m × g × Δh",
            meaningAr: "طاقة الوضع التثاقلية = الكتلة × تسارع الجاذبية × الارتفاع",
            units: "Joules (J)",
          },
          {
            name: "Power",
            equation: "P = ΔW / t = ΔE / t",
            meaningAr: "القدرة = الشغل المنجز (أو الطاقة المحولة) / الزمن",
            units: "Watts (W = J/s)",
          },
          {
            name: "Efficiency (%)",
            equation: "Efficiency = (Useful Energy Output / Total Energy Input) × 100%",
            meaningAr: "الكفاءة = (الطاقة المفيدة الناتجة / إجمالي الطاقة الداخلة) × 100%",
            units: "Percentage (%)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Principle of Conservation of Energy",
            termAr: "قانون حفظ الطاقة",
            definition: "Energy cannot be created or destroyed, only transferred from one form to another or stored.",
            definitionAr: "الطاقة لا تفنى ولا تستحدث من العدم، وإنما تتحول من شكل إلى آخر.",
            markSchemeKeywords: ["energy cannot be created or destroyed", "only transformed / transferred"],
          },
          {
            term: "Work Done",
            termAr: "الشغل",
            definition: "The amount of mechanical energy transferred when a force moves an object through a distance in the direction of the force.",
            definitionAr: "مقدار الطاقة المنقولة ميكانيكياً عند تحريك جسم بقوة لمسافة في اتجاه تلك القوة.",
            markSchemeKeywords: ["force × distance in direction of force", "energy transferred"],
          },
          {
            term: "Power",
            termAr: "القدرة",
            definition: "The rate of doing work or the rate at which energy is transferred per unit time.",
            definitionAr: "معدل بذل الشغل أو معدل تحويل ونقل الطاقة خلال وحدة الزمن.",
            markSchemeKeywords: ["rate of energy transfer", "rate of doing work", "work done per unit time"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Energy Resources Comparison (Renewable vs Non-Renewable)",
            topicHeadingAr: "مقارنة مصادر الطاقة المتجددة وغير المتجددة",
            content: [
              "Renewable Sources (will not run out): Solar (photovoltaic cells / solar thermal), Wind turbines, Hydroelectric dams, Tidal, Wave, Geothermal, Biomass/Biofuels.",
              "Non-Renewable Sources (finite reserves): Fossil fuels (coal, oil, natural gas) - release CO2 causing greenhouse effect and global warming; Nuclear fission (Uranium-235) - high energy density, no greenhouse gas emission during operation, but produces dangerous radioactive waste.",
              "The Sun's Energy: The primary source for almost all Earth energy (wind, water cycle, fossil fuels, biomass) driven by nuclear fusion (hydrogen nuclei fusing into helium in core).",
            ],
            contentAr: [
              "المصادر المتجددة (لا تنفد): الطاقة الشمسية، الرياح، الكهرومائية، المد والجزر، حرارة باطن الأرض، والوقود الحيوي.",
              "المصادر غير المتجددة: الوقود الأحفوري (فحم، نفط، غاز) ويسبب انبعاث ثاني أكسيد الكربون والاحتباس الحراري؛ والانشطار النووي لليورانيوم.",
              "طاقة الشمس: المصدر الأساسي لأغلب طاقات الأرض وتنتج من تفاعلات الاندماج النووي (اندماج أنوية الهيدروجين لتكوين الهيليوم).",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Conservation of Energy: Dropping Ball Speed",
            question:
              "A 0.2 kg ball is dropped from a height of 5.0 m above the ground. Assuming no air resistance (g = 9.8 N/kg), calculate the kinetic energy and speed of the ball just before hitting the ground.",
            given: "Mass m = 0.2 kg, Height h = 5.0 m, g = 9.8 N/kg",
            formula: "GPE_top = mgh; By conservation of energy: KE_bottom = GPE_top; v = √(2 × KE / m)",
            solutionSteps: [
              "Step 1: Calculate initial GPE at top: GPE = 0.2 kg × 9.8 N/kg × 5.0 m = 9.8 J",
              "Step 2: All GPE converts to Kinetic Energy at ground level: KE = 9.8 J",
              "Step 3: Solve for velocity: ½ × 0.2 × v² = 9.8 → 0.1 × v² = 9.8 → v² = 98 → v = √98 ≈ 9.9 m/s",
            ],
            finalAnswer: "KE = 9.8 J, Speed v = 9.9 m/s",
            teacherInsightAr:
              "لاحظ أن السرعة النهائية عند إهمال مقاومة الهواء لا تعتمد على كتلة الجسم (v = √(2gh)).",
          },
        ],
      },
    ],
  },
  {
    unitId: "block-2",
    unitNumber: 2,
    blockTitleEn: "Block 2: Thermal Physics",
    blockTitleAr: "الوحدة الثانية: الفيزياء الحرارية وسلوك المادة",
    colorTheme: "from-amber-600 to-rose-500",
    chapters: [
      {
        id: "b2-ch9",
        chapterNumber: "Chapter 9",
        titleEn: "The Kinetic Particle Model of Matter & Gas Laws",
        titleAr: "النموذج الحركي للجسيمات، حالات المادة، وقانون بويل للغازات",
        syllabusRef: "Cambridge 2.1 States & Molecular Theory",
        keyOverview:
          "States of matter (solid, liquid, gas), Brownian motion as direct evidence for molecular bombardment, evaporation vs boiling, and Boyle's Law (p1V1 = p2V2).",
        keyOverviewAr:
          "ترتيب وحركة الجسيمات في الحالات الثلاث، الحركة البراونية كدليل على تصادم الجزيئات، الفرق الدقيق بين التبخر والغليان، وتفسير ضغط الغازات وقانون بويل عند ثبوت درجة الحرارة.",
        coreFormulas: [
          {
            name: "Boyle's Law for Ideal Gases",
            equation: "p₁ × V₁ = p₂ × V₂  (at constant temperature)",
            meaningAr: "الضغط الابتدائي × الحجم الابتدائي = الضغط النهائي × الحجم النهائي (عند ثبوت الحرارة)",
            units: "Pa and m³ (or kPa and cm³)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Brownian Motion",
            termAr: "الحركة البراونية",
            definition: "The random, jerky, zig-zag motion of microscopic particles (like pollen or smoke grains in air/water) caused by continuous collisions with fast, invisible fluid molecules.",
            definitionAr: "الحركة العشوائية المتعرجة لحبيبات الدخان أو حبوب اللقاح المعلقة في المائع بسبب التصادمات المستمرة مع جزيئات المائع غير المرئية سريعة الحركة.",
            markSchemeKeywords: ["random erratic motion", "bombardment by invisible fast-moving molecules"],
          },
          {
            term: "Evaporation vs Boiling",
            termAr: "التبخر مقابل الغليان",
            definition: "Evaporation occurs at any temperature from the surface only as most energetic particles escape, causing cooling. Boiling occurs throughout the entire bulk liquid at a fixed boiling point temperature with bubble formation.",
            definitionAr: "التبخر يحدث عند أي درجة حرارة ومن السطح فقط لهروب الجزيئات الأعلى طاقة مسبباً التبريد؛ بينما الغليان يحدث عند درجة حرارة ثابتة في كامل حجم السائل مع تكون فقاعات.",
            markSchemeKeywords: ["evaporation: any temp, surface only, causes cooling", "boiling: fixed temp, throughout liquid, bubbles form"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Gas Pressure and Temperature / Volume Relationships",
            topicHeadingAr: "تفسير ضغط الغاز وفق النظرية الحركية",
            content: [
              "Origin of Gas Pressure: Fast gas molecules continuously collide with the inner container walls. Each collision exerts a tiny force (Rate of change of momentum Δp/Δt). Millions of collisions per second create an overall outward pressure (P = Total Force / Wall Area).",
              "Effect of Temperature Increase (Fixed Volume): Molecules gain kinetic energy and move faster → Collide more frequently and with greater force with walls → Pressure increases.",
              "Effect of Decreasing Volume (Boyle's Law at Fixed Temp): Halving volume packs molecules into half the space → Collisions with walls occur twice as frequently per unit area → Pressure doubles (p ∝ 1/V).",
            ],
            contentAr: [
              "منشأ ضغط الغاز: تصادم جزيئات الغاز السريعة مع جدران الإناء بقوة (معدل التغير في كمية الحركة)، مما يولد ضغطاً منتظماً على الجدار.",
              "أثر زيادة درجة الحرارة: تزداد طاقة الحركة وسرعة الجزيئات فتتصادم بقوة وتكرار أكبر مع الجدران فيرتفع الضغط.",
              "أثر تقليل الحجم (قانون بويل): تقليل الحجم للنصف يضاعف عدد التصادمات في الثانية لكل وحدة مساحة فيتضاعف الضغط.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Boyle's Law Compression Calculation",
            question:
              "A gas syringe contains 60 cm³ of air at atmospheric pressure of 100 kPa. If the piston is pushed inward until the volume decreases to 20 cm³ at constant temperature, calculate the new gas pressure.",
            given: "p1 = 100 kPa, V1 = 60 cm³, V2 = 20 cm³, p2 = ?",
            formula: "p1 × V1 = p2 × V2  →  p2 = (p1 × V1) / V2",
            solutionSteps: [
              "Step 1: Write Boyle's law equation: p1V1 = p2V2",
              "Step 2: Substitute values: 100 kPa × 60 cm³ = p2 × 20 cm³",
              "Step 3: Solve for p2: p2 = 6000 / 20 = 300 kPa",
            ],
            finalAnswer: "300 kPa (or 3.0 × 10⁵ Pa)",
            teacherInsightAr:
              "تأكد دائماً أن وحدات الضغط والحجم متطابقة في كلا الطرفين عند التعويض في قانون بويل.",
          },
        ],
      },
      {
        id: "b2-ch10",
        chapterNumber: "Chapter 10",
        titleEn: "Thermal Properties, Specific Heat Capacity & Latent Heat",
        titleAr: "الخصائص الحرارية، السعة الحرارية النوعية، والحرارة الكامنة",
        syllabusRef: "Cambridge 2.2 Thermal Properties",
        keyOverview:
          "Thermal expansion of solids/liquids/gases, calibrating liquid-in-glass and thermocouple thermometers, Specific Heat Capacity (ΔE = mcΔT), and Latent Heat of Fusion/Vaporization (ΔE = mL).",
        keyOverviewAr:
          "التمدد الحراري، معايرة الترمومترات ونقاط الثبات، السعة الحرارية النوعية (ΔE = mcΔT) وتطبيقات الماء كمبرد، والحرارة الكامنة للانصهار والتبخير (ΔE = mL).",
        coreFormulas: [
          {
            name: "Specific Heat Capacity",
            equation: "ΔE = m × c × Δθ",
            meaningAr: "كمية الطاقة الحرارية = الكتلة × السعة الحرارية النوعية × التغير في درجة الحرارة",
            units: "c in J / (kg °C)",
          },
          {
            name: "Specific Latent Heat",
            equation: "ΔE = m × L  (L_f for fusion, L_v for vaporization)",
            meaningAr: "الطاقة الكامنة لتغير الحالة = الكتلة × الحرارة الكامنة النوعية",
            units: "L in J / kg",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Specific Heat Capacity (c)",
            termAr: "السعة الحرارية النوعية",
            definition: "The energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K).",
            definitionAr: "كمية الطاقة الحرارية اللازمة لرفع درجة حرارة 1 كجم من المادة بمقدار 1 درجة سيليزية.",
            markSchemeKeywords: ["energy required to raise 1 kg of substance by 1 °C"],
          },
          {
            term: "Specific Latent Heat (L)",
            termAr: "الحرارة الكامنة النوعية",
            definition: "The energy required to change the state of 1 kg of a substance with no change in temperature.",
            definitionAr: "كمية الطاقة اللازمة لتحويل حالة 1 كجم من المادة من طور لآخر دون أي تغير في درجة الحرارة.",
            markSchemeKeywords: ["energy to change state of 1 kg", "no change in temperature / at constant temperature"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Why Temperature Remains Constant During State Change",
            topicHeadingAr: "سر ثبوت درجة الحرارة أثناء الانصهار والغليان",
            content: [
              "During melting or boiling, thermal energy supplied does NOT increase the average kinetic energy of the particles (hence thermometer reading remains constant).",
              "Instead, all supplied energy is used to do work breaking the intermolecular attractive bonds holding particles together and increasing potential energy.",
            ],
            contentAr: [
              "أثناء الانصهار أو الغليان، الطاقة المكتسبة لا تزيد طاقة حركة الجزيئات (لذلك يثبت مقياس الحرارة)، وإنما تُستهلك بالكامل في كسر الروابط التجاذبية بين الجزيئات وزيادة طاقة الوضع.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Water Kettle Heating Calculation",
            question:
              "Calculate the thermal energy required to heat 1.5 kg of water from 20 °C to 100 °C in an electric kettle. (Specific heat capacity of water = 4200 J/(kg °C)).",
            given: "Mass m = 1.5 kg, c = 4200 J/(kg °C), Δθ = 100 - 20 = 80 °C",
            formula: "ΔE = m × c × Δθ",
            solutionSteps: [
              "Step 1: Calculate temperature change: Δθ = 80 °C",
              "Step 2: Multiply: ΔE = 1.5 kg × 4200 J/(kg °C) × 80 °C",
              "Step 3: ΔE = 504,000 J (or 504 kJ)",
            ],
            finalAnswer: "504 kJ (504,000 J)",
            teacherInsightAr:
              "الماء يمتلك سعة حرارية نوعية عالية جداً (4200 J/kg°C) مقارنة بالمعادن، ولهذا يستخدم في مبردات محركات السيارات وأنظمة التدفئة المركزية.",
          },
        ],
      },
      {
        id: "b2-ch11",
        chapterNumber: "Chapter 11",
        titleEn: "Thermal Energy Transfer (Conduction, Convection & Radiation)",
        titleAr: "طرق انتقال الحرارة: التوصيل، الحمل، والإشعاع الحراري وتطبيقات العزل",
        syllabusRef: "Cambridge 2.3 Thermal Energy Transfers",
        keyOverview:
          "Mechanism of conduction in non-metals (lattice vibrations) vs metals (free delocalised electrons), convection currents in fluids driven by density changes, infrared radiation emission/absorption, and vacuum flasks.",
        keyOverviewAr:
          "آلية التوصيل الحراري في المعادن بواسطة الإلكترونات الحرة، تيارات الحمل في السوائل والغازات الناتجة عن تمدد المائع وتغير كثافته، الإشعاع الكهرومغناطيسي تحت الأحمر، وتصميم الترامس العازلة.",
        coreFormulas: [],
        mustKnowDefinitions: [
          {
            term: "Conduction",
            termAr: "التوصيل الحراري",
            definition: "The transfer of thermal energy through matter from a region of higher temperature to lower temperature without bulk movement of the material itself.",
            definitionAr: "انتقال الطاقة الحرارية عبر المادة من المنطقة الأعلى حرارة إلى الأقل دون انتقال المادة نفسها.",
            markSchemeKeywords: ["vibrations of particles", "free electrons in metals"],
          },
          {
            term: "Convection",
            termAr: "الحمل الحراري",
            definition: "The transfer of thermal energy in fluids caused by movement of the fluid itself, where heated fluid expands, becomes less dense, and floats upwards.",
            definitionAr: "انتقال الحرارة في الموائع (السوائل والغازات) عبر حركة المائع نفسه نتيجة تمدده وانخفاض كثافته وصعوده لأعلى.",
            markSchemeKeywords: ["fluid expands", "density decreases", "warm fluid rises"],
          },
          {
            term: "Radiation (Infrared)",
            termAr: "الإشعاع الحراري",
            definition: "The transfer of thermal energy by electromagnetic infrared waves which can travel through a vacuum without needing any matter.",
            definitionAr: "انتقال الطاقة الحرارية عبر موجات كهرومغناطيسية تحت حمراء، تنتقل عبر الفراغ دون الحاجة لوسط مادي.",
            markSchemeKeywords: ["electromagnetic waves / infrared", "can travel through vacuum"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Surface Radiation Properties & Vacuum Flask Design",
            topicHeadingAr: "خصائص الأسطح في الإشعاع وتصميم التيرموس العازل",
            content: [
              "Best Emitters & Absorbers of Radiation: Dull, matt black surfaces.",
              "Best Reflectors & Worst Absorbers/Emitters: Shiny, silvered, white surfaces.",
              "Vacuum Flask Features: 1. Vacuum between double glass walls prevents conduction and convection. 2. Silvered interior surfaces reflect infrared radiation back inside. 3. Insulating plastic stopper prevents heat loss by convection and evaporation.",
            ],
            contentAr: [
              "أفضل الأسطح إشعاعاً وامتصاصاً للحرارة: الأسطح السوداء غير اللامعة (Matt black).",
              "أفضل الأسطح عكساً وأضعفها امتصاصاً: الأسطح الفضية اللامعة (Shiny silver).",
              "مكونات التيرموس العازل: 1. فراغ بين جدارين زجاجيين يمنع التوصيل والحمل. 2. طلاء فضي لامع يعكس الإشعاع الحراري. 3. سدادة بلاستيكية تمنع الحمل والتبخر.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Comparing Cooling Rates of Black vs Silver Cans",
            question:
              "Two identical metal cans, one painted matt black and the other shiny silver, contain hot water at 90 °C. Explain why the water in the black can cools down much faster.",
            given: "Identical volumes of water, equal start temp 90 °C, matt black vs shiny silver surface",
            formula: "Rate of cooling ∝ Emission rate of infrared radiation",
            solutionSteps: [
              "Step 1: Identify that thermal radiation is the primary mechanism of heat loss to surroundings.",
              "Step 2: State that a matt black surface is a much better emitter of infrared radiation than a shiny silver surface.",
              "Step 3: Therefore, heat energy radiates away from the black can at a much higher rate per second.",
            ],
            finalAnswer: "Matt black is the best emitter of infrared thermal radiation.",
            teacherInsightAr:
              "في ورقة الاختبار Paper 6، لا تنس ذكر المتغيرات الثابتة للتجربة العادلة: نفس حجم الماء، نفس درجة الحرارة الابتدائية، ونفس الغطاء العازل.",
          },
        ],
      },
    ],
  },
  {
    unitId: "block-3",
    unitNumber: 3,
    blockTitleEn: "Block 3: Physics of Waves, Sound & Light",
    blockTitleAr: "الوحدة الثالثة: فيزياء الموجات، الصوت، الضوء والبصريات",
    colorTheme: "from-purple-600 to-indigo-500",
    chapters: [
      {
        id: "b3-ch12",
        chapterNumber: "Chapter 12",
        titleEn: "Sound Waves, Speed of Sound & Oscilloscope",
        titleAr: "موجات الصوت، سرعة الصوت، وحسابات الصدى وراسم الإشارة",
        syllabusRef: "Cambridge 3.4 Sound",
        keyOverview:
          "Production of sounds by vibrations, longitudinal sound waves with compressions and rarefactions, measuring speed of sound in air (≈ 330 m/s), echo calculations, frequency (pitch), amplitude (loudness), and audible human hearing range (20 Hz – 20 kHz).",
        keyOverviewAr:
          "توليد الصوت بالاهتزازات، الموجات الطولية ومناطق التضاغط والتخلخل، قياس سرعة الصوت وحسابات الصدى، راسم الإشارة الإلكتروني وعلاقة التردد بالنغمة والاتساع بشدة الصوت، والموجات فوق الصوتية (Ultrasound).",
        coreFormulas: [
          {
            name: "Speed of Sound (Echo Calculation)",
            equation: "v = (2 × d) / t",
            meaningAr: "السرعة = (ضعف المسافة إلى الحاجز) / زمن سماع الصدى",
            units: "m/s",
          },
          {
            name: "Wave Frequency and Period",
            equation: "f = 1 / T",
            meaningAr: "التردد = 1 / الزمن الدوري",
            units: "Hertz (Hz = s⁻¹)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Ultrasound",
            termAr: "الموجات فوق الصوتية",
            definition: "Sound waves with frequencies higher than 20,000 Hz (20 kHz), which is above the upper limit of human hearing.",
            definitionAr: "موجات صوتية يزيد ترددها عن 20,000 هرتز، وهي أعلى من الحد الأقصى للسمع البشري.",
            markSchemeKeywords: ["frequency above 20 kHz / 20000 Hz", "above human hearing range"],
          },
          {
            term: "Compressions and Rarefactions",
            termAr: "التضاغطات والتخلخلات",
            definition: "Compressions are regions where air particles are pushed closer together with higher pressure. Rarefactions are regions where particles are spread further apart with lower pressure.",
            definitionAr: "التضاغطات مناطق تكون فيها جزيئات الوسط متقاربة والضغط أعلى؛ والتخلخلات مناطق تكون فيها الجزيئات متباعدة والضغط منخفضاً.",
            markSchemeKeywords: ["particles closer together / higher pressure", "particles further apart / lower pressure"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Oscilloscope Wave Traces (Pitch and Loudness)",
            topicHeadingAr: "قراءة شاشة راسم الإشارة (تردد النغمة وشدة الصوت)",
            content: [
              "Pitch: Determined entirely by Frequency (f). Higher pitch = Higher frequency = More wave cycles squashed into the same horizontal timebase.",
              "Loudness: Determined entirely by Amplitude. Louder sound = Larger amplitude = Taller peak height from center undisturbed level.",
              "Speed of sound in different media: Fastest in Solids (≈ 5000 m/s in steel) > Liquids (≈ 1500 m/s in water) > Gases (≈ 330 m/s in air). Cannot travel through vacuum.",
            ],
            contentAr: [
              "طبقة أو حدة الصوت (Pitch): تتحدد بالتردد؛ الصوت الحاد له تردد أعلى وعدد موجات أكبر في نفس الزمن.",
              "علو أو شدة الصوت (Loudness): تتحدد باتساع الموجة (Amplitude)؛ الصوت العالي له قمم أطول.",
              "سرعة الصوت: الأسرع في المواد الصلبة (5000 م/ث) ثم السوائل (1500 م/ث) ثم الغازات (330 م/ث) ولا ينتقل في الفراغ.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Echo Depth Sounder (Sonar)",
            question:
              "A ship uses an echo sounder to measure water depth. A pulse of ultrasound is emitted, reflects off the sea bed, and returns to the ship 0.6 seconds later. If the speed of sound in seawater is 1500 m/s, calculate the depth of the sea.",
            given: "Total time t = 0.6 s, Speed in water v = 1500 m/s",
            formula: "Total distance travelled (there and back) = v × t; Depth = Total distance / 2",
            solutionSteps: [
              "Step 1: Total distance = 1500 m/s × 0.6 s = 900 m",
              "Step 2: Water depth = 900 m / 2 = 450 m",
            ],
            finalAnswer: "450 m",
            teacherInsightAr:
              "تذكر دائماً في مسائل الصدى: الصوت يذهب ويعود، لذلك إما أن تقسم المسافة الكلية على 2 أو تقسم الزمن على 2.",
          },
        ],
      },
      {
        id: "b3-ch13",
        chapterNumber: "Chapter 13",
        titleEn: "Light, Reflection, Refraction, TIR & Lenses",
        titleAr: "الضوء، قوانين الانعكاس، الانكسار، الانعكاس الكلي الحرج والعدسات",
        syllabusRef: "Cambridge 3.2 Light",
        keyOverview:
          "Law of reflection (i = r), plane mirror virtual image, refraction and Snell's Law (n = sin i / sin r = c/v), Total Internal Reflection (sin c = 1/n), optical fibres, and converging/diverging lens ray diagrams.",
        keyOverviewAr:
          "قانون الانعكاس، خصائص الصورة في المرآة المستوية، الانكسار وقانون سنيل، الزاوية الحرجة والانعكاس الكلي الداخلي (TIR)، الألياف الضوئية، ورسم مسارات الأشعة في العدسات المحدبة (الصور الحقيقية والتقديرية والمكبرة).",
        coreFormulas: [
          {
            name: "Snell's Law of Refraction",
            equation: "n = sin(i) / sin(r) = c / v",
            meaningAr: "معامل الانكسار = جيب زاوية السقوط / جيب زاوية الانكسار = سرعة الضوء في الفراغ / سرعته في المادة",
            units: "Unitless index (e.g. glass ≈ 1.5, water ≈ 1.33)",
          },
          {
            name: "Critical Angle Formula",
            equation: "sin(c) = 1 / n",
            meaningAr: "جيب الزاوية الحرجة = 1 / معامل الانكسار",
            units: "Degrees (°)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Total Internal Reflection (TIR)",
            termAr: "الانعكاس الكلي الداخلي",
            definition: "The complete reflection of a light ray back into the optically denser medium when the angle of incidence in that denser medium exceeds the critical angle (i > c).",
            definitionAr: "انعكاس شعاع الضوء كلياً إلى داخل الوسط الأكبر كثافة ضوئية عندما تكون زاوية سقوطه أكبر من الزاوية الحرجة.",
            markSchemeKeywords: ["ray travels from denser to less dense medium", "angle of incidence greater than critical angle (i > c)"],
          },
          {
            term: "Real Image vs Virtual Image",
            termAr: "الصورة الحقيقية مقابل التقديرية",
            definition: "A Real Image is formed where light rays actually intersect and can be focused onto a physical screen. A Virtual Image is formed where rays only appear to diverge from and cannot be projected on a screen.",
            definitionAr: "الصورة الحقيقية تتكون من التقاء الأشعة الضوئية الفعلية ويمكن استقبالها على حائل، بينما التقديرية ناتجة عن امتدادات الأشعة ولا تستقبل على حائل.",
            markSchemeKeywords: ["real: rays actually meet / can be cast on screen", "virtual: rays appear to diverge / cannot be cast on screen"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Converging Lens Ray Diagram Construction Rules",
            topicHeadingAr: "قواعد رسم مسارات الأشعة للعدسات المحدبة المجمعة",
            content: [
              "Ray 1: Passes straight through the optical center of the lens without any deflection.",
              "Ray 2: Parallel to the principal axis before the lens, refracts and passes through the principal focus (F) behind the lens.",
              "Object beyond 2F: Image is Real, Inverted, Diminished (between F and 2F - camera mode).",
              "Object between F and 2F: Image is Real, Inverted, Magnified (projector mode).",
              "Object closer than F: Rays diverge behind lens; extrapolate backwards to form Virtual, Upright, Magnified image (Magnifying Glass mode).",
            ],
            contentAr: [
              "الشعاع الأول: يمر بالمركز البصري للعدسة مستقيماً دون انكسار.",
              "الشعاع الثاني: يوازي المحور الأصلي ثم ينكسر ماراً بالبؤرة الأصلية (F).",
              "الجسم بعد ضعف البعد البؤري 2F: الصورة حقيقية، مقلوبة، ومصغرة (كاميرا).",
              "الجسم بين F و 2F: الصورة حقيقية، مقلوبة، ومكبرة (جهاز عرض).",
              "الجسم أقرب من البعد البؤري F: الصورة تقديرية، معتدلة، ومكبرة (عدسة مكبرة).",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Calculating Refraction Angle and Critical Angle",
            question:
              "A ray of light in air strikes a rectangular glass block (n = 1.50) at an angle of incidence of 45°. 1. Calculate the angle of refraction inside the glass. 2. Calculate the critical angle for this glass.",
            given: "i = 45°, n = 1.50",
            formula: "1. sin r = sin i / n; 2. sin c = 1 / n",
            solutionSteps: [
              "Step 1: Calculate sin r = sin(45°) / 1.50 = 0.7071 / 1.50 = 0.4714",
              "Step 2: Angle of refraction r = sin⁻¹(0.4714) = 28.1°",
              "Step 3: Calculate critical angle: sin c = 1 / 1.50 = 0.6667 → c = sin⁻¹(0.6667) = 41.8°",
            ],
            finalAnswer: "Angle of refraction r = 28.1°, Critical angle c = 41.8°",
            teacherInsightAr:
              "تقاس دائماً زوايا السقوط والانكسار والانعكاس بالنسبة للعمود المقام (Normal) وليس بالنسبة لسطح الزجاج.",
          },
        ],
      },
      {
        id: "b3-ch14",
        chapterNumber: "Chapter 14 & 15",
        titleEn: "Wave Properties & The Electromagnetic Spectrum",
        titleAr: "خصائص الموجات العامة، والحيود، والطيف الكهرومغناطيسي",
        syllabusRef: "Cambridge 3.1 & 3.3 Electromagnetic Spectrum",
        keyOverview:
          "Transverse vs Longitudinal waves, the wave equation (v = fλ), diffraction through gaps, dispersion through prisms, the complete EM spectrum (Gamma, X-rays, UV, Visible, Infrared, Microwaves, Radio) with uses and hazards.",
        keyOverviewAr:
          "الموجات المستعرضة والطولية، معادلة سرعة الموجة (v = fλ)، ظاهرة الحيود حول الفتحات، تشتت الضوء الأبيض بالمنشور، والطيف الكهرومغناطيسي الكامل واستخداماته الطبية والصناعية والاتصالات.",
        coreFormulas: [
          {
            name: "Universal Wave Equation",
            equation: "v = f × λ",
            meaningAr: "سرعة الموجة = التردد × الطول الموجي",
            units: "v in m/s, f in Hz, λ in meters (m)",
          },
          {
            name: "Speed of Light / EM Waves in Vacuum",
            equation: "c = 3.0 × 10⁸ m/s  (300,000 km/s)",
            meaningAr: "سرعة جميع الموجات الكهرومغناطيسية في الفراغ ثابتة",
            units: "m/s",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Transverse Wave vs Longitudinal Wave",
            termAr: "الموجة المستعرضة مقابل الطولية",
            definition: "In a Transverse wave, particle vibrations are perpendicular (at 90°) to wave energy direction (e.g. water ripples, all EM waves). In a Longitudinal wave, vibrations are parallel to wave energy direction (e.g. sound).",
            definitionAr: "المستعرضة: اهتزاز الجسيمات عمودي على اتجاه انتشار الموجة (مثل الضوء والموجات الكهرومغناطيسية). الطولية: الاهتزاز موازٍ لاتجاه انتشار الموجة (مثل الصوت).",
            markSchemeKeywords: ["transverse: vibrations perpendicular to direction of energy", "longitudinal: vibrations parallel to direction of energy"],
          },
          {
            term: "Diffraction",
            termAr: "الحيود (Diffraction)",
            definition: "The spreading of waves around edges of obstacles or as they pass through a narrow gap, greatest when gap width is approximately equal to the wavelength (gap ≈ λ).",
            definitionAr: "انحناء وانتشار الموجات عند مرورها عبر فتحة ضيقة أو حول الحواف، ويكون أوضح ما يمكن عندما يكون اتساع الفتحة مساوياً تقريباً للطول الموجي.",
            markSchemeKeywords: ["spreading of waves through a gap", "greatest when gap size equals wavelength"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "The Complete Electromagnetic Spectrum (Summary Table)",
            topicHeadingAr: "جدول ملخص الطيف الكهرومغناطيسي الكامل: الاستخدامات والمخاطر",
            content: [
              "Order (Decreasing Wavelength / Increasing Frequency & Energy): Radio → Microwave → Infrared → Visible Light (Red to Violet) → Ultraviolet → X-Rays → Gamma Rays.",
              "Common Properties: All are transverse waves; all travel at 3.0 × 10⁸ m/s in vacuum; can travel through empty space.",
              "Uses: Radio (radio/TV broadcast); Microwaves (satellite communication, cooking); Infrared (remote controls, thermal imaging); Visible (vision, optical fibres); UV (sunbeds, sterilising water); X-rays (medical bone imaging, security scanners); Gamma (cancer radiotherapy, sterilising surgical instruments).",
              "Hazards: UV (skin cancer, cataracts); X-rays & Gamma (ionising radiation damaging DNA and causing cell mutations).",
            ],
            contentAr: [
              "ترتيب الطيف (من الأطول موجة والأقل طاقة إلى الأقصر موجة والأعلى طاقة): راديو ← ميكروويف ← تحت حمراء ← الضوء المرئي (أحمر إلى بنفسجي) ← فوق بنفسجية ← أشعة سينية ← أشعة جاما.",
              "الخصائص المشتركة: جميعها موجات مستعرضة، سرعتها في الفراغ متساوية (3 × 10⁸ م/ث)، وتنتقل في الفراغ.",
              "الاستخدامات: الراديو (البث)، الميكروويف (الاتصالات الفضائية والطبخ)، تحت الحمراء (الريموت والكاميرات الحرارية)، الضوء المرئي (الألياف الضوئية)، فوق البنفسجية (التعقيم)، الأشعة السينية (تصوير العظام)، جاما (علاج الأورام وتعقيم الأدوات الجراحية).",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Calculating Wavelength of Radio Waves",
            question:
              "An FM radio transmitter broadcasts audio signals at a frequency of 100 MHz. Given that radio waves travel at the speed of light c = 3.0 × 10⁸ m/s, calculate the wavelength of the radio waves.",
            given: "f = 100 MHz = 100 × 10⁶ Hz = 1.0 × 10⁸ Hz, v = 3.0 × 10⁸ m/s",
            formula: "v = f × λ  →  λ = v / f",
            solutionSteps: [
              "Step 1: Convert frequency to Hertz: 100 MHz = 1.0 × 10⁸ Hz",
              "Step 2: Substitute into wave equation: λ = (3.0 × 10⁸ m/s) / (1.0 × 10⁸ Hz)",
              "Step 3: λ = 3.0 m",
            ],
            finalAnswer: "3.0 meters",
            teacherInsightAr:
              "انتبه للبادئات العلمية: Mega (M) تعني 10⁶، و Kilo (k) تعني 10³، و Giga (G) تعني 10⁹.",
          },
        ],
      },
    ],
  },
  {
    unitId: "block-4",
    unitNumber: 4,
    blockTitleEn: "Block 4: Electricity & Magnetism",
    blockTitleAr: "الوحدة الرابعة: الكهرباء، المغناطيسية، والدوائر الكهربية",
    colorTheme: "from-yellow-600 to-amber-500",
    chapters: [
      {
        id: "b4-ch16",
        chapterNumber: "Chapter 16 & 17",
        titleEn: "Magnetism & Static Electricity",
        titleAr: "المغناطيسية، الحث الكهروستاتيكي، والمجال الكهربي",
        syllabusRef: "Cambridge 4.1 & 4.2 Magnetism & Electrostatics",
        keyOverview:
          "Magnetic poles (like repel, unlike attract), soft iron vs hard steel, magnetic field lines, charging by friction and induction, electric field lines, and forces between charges.",
        keyOverviewAr:
          "الأقطاب المغناطيسية، الفرق بين الحديد المطاوع والصلب، رسم خطوط المجال المغناطيسي، الشحن بالاحتكاك والحث الكهروستاتيكي، وحركة الإلكترونات ومفهوم المجال الكهربي.",
        coreFormulas: [
          {
            name: "Electric Charge and Current",
            equation: "Q = I × t",
            meaningAr: "الشحنة الكهربية (كولوم) = شدة التيار (أمبير) × الزمن (ثانية)",
            units: "Coulombs (C = A s)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Electric Field",
            termAr: "المجال الكهربي",
            definition: "A region of space where an electric charge experiences an electrostatic force. The direction of the field lines shows the direction of force on a positive test charge.",
            definitionAr: "منطقة من الفضاء تتأثر فيها الشحنة الكهربية بقوة كهروستاتيكية، ويكون اتجاه خطوط المجال من الموجب إلى السالب.",
            markSchemeKeywords: ["region where a charge experiences a force", "direction from positive to negative"],
          },
          {
            term: "Hard vs Soft Magnetic Materials",
            termAr: "المواد المغناطيسية الصلبة والمطاوعة",
            definition: "Soft magnetic material (Soft Iron) is easy to magnetise and loses magnetism easily (ideal for electromagnet cores and transformer cores). Hard magnetic material (Steel) is hard to magnetise but retains permanent magnetism (ideal for permanent bar magnets).",
            definitionAr: "الحديد المطاوع يسهل مغنطته ويفقدها بسهولة (لذلك يصنع منه قلب المغناطيس والمحول)، بينما الفولاذ يحتفظ بمغناطيسيته الدائمة.",
            markSchemeKeywords: ["soft iron: easily magnetised / demagnetised", "steel: retains permanent magnetism"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Charging by Electrostatic Induction",
            topicHeadingAr: "خطوات الشحن بالحث الكهروستاتيكي",
            content: [
              "1. Bring a negatively charged rod near an isolated metal sphere → Free electrons are repelled to the opposite side of the sphere.",
              "2. Earth the sphere with a finger or wire → Repelled electrons escape down to earth.",
              "3. Remove the earth connection while keeping the charged rod in position.",
              "4. Remove the charged rod → The sphere is left with an evenly distributed net positive charge.",
            ],
            contentAr: [
              "1. تقريب قضيب مشحون بشحنة سالبة من كرة معدنية معزولة ← تتنافر الإلكترونات الحرة إلى الطرف البعيد.",
              "2. توصيل الكرة بالأرض بالإصبع أو سلك ← تهرب الإلكترونات المتنافرة إلى الأرض.",
              "3. قطع الاتصال بالأرض أولاً مع بقاء القضيب مكانه.",
              "4. إبعاد القضيب المشحون ← تتوزع الشحنة الموجبة المتبقية بالتساوي على الكرة.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Calculating Electric Charge from Current",
            question:
              "A steady current of 2.5 A flows through a circuit for 4 minutes. Calculate the total charge transferred.",
            given: "Current I = 2.5 A, Time t = 4 minutes = 4 × 60 = 240 s",
            formula: "Q = I × t",
            solutionSteps: [
              "Step 1: Convert time to seconds: t = 240 s",
              "Step 2: Q = 2.5 A × 240 s",
              "Step 3: Q = 600 C",
            ],
            finalAnswer: "600 Coulombs (C)",
            teacherInsightAr:
              "يجب دائماً تحويل الزمن إلى ثوانٍ (Seconds) عند استخدام قانون Q = It.",
          },
        ],
      },
      {
        id: "b4-ch18",
        chapterNumber: "Chapter 18 & 19",
        titleEn: "Electric Circuits, Ohm's Law, Components & Safety",
        titleAr: "الدوائر الكهربية، قانون أوم، توصيل المقاومات، المكونات الإلكترونية والأمان",
        syllabusRef: "Cambridge 4.2 & 4.3 Circuits",
        keyOverview:
          "Ohm's law (V = IR), resistance in series (R = R1 + R2) and parallel (1/R = 1/R1 + 1/R2), potential dividers, transducers (LDR, thermistor), diodes, transistors, logic gates, fuses, and earth wires.",
        keyOverviewAr:
          "قانون أوم (V = IR)، حساب المقاومة المكافئة على التوالي والتوازي، مجزئ الجهد، المحولات الحسية (LDR والثرمستور)، الدايود وبوابات المنطق، ومصاهر الأمان (Fuses) وسلك التأريض.",
        coreFormulas: [
          {
            name: "Ohm's Law",
            equation: "V = I × R",
            meaningAr: "فرق الجهد = شدة التيار × المقاومة الكهربية",
            units: "Volts (V), Amperes (A), Ohms (Ω)",
          },
          {
            name: "Resistors in Series",
            equation: "R_total = R₁ + R₂ + R₃",
            meaningAr: "المقاومة المكافئة على التوالي = مجموع المقاومات",
            units: "Ohms (Ω)",
          },
          {
            name: "Resistors in Parallel",
            equation: "1 / R_total = 1/R₁ + 1/R₂  (or R = (R1×R2)/(R1+R2))",
            meaningAr: "مقلوب المقاومة المكافئة على التوازي = مجموع مقلوب المقاومات",
            units: "Ohms (Ω)",
          },
          {
            name: "Electrical Power",
            equation: "P = I × V = I² × R = V² / R",
            meaningAr: "القدرة الكهربية المستهلكة = التيار × الجهد",
            units: "Watts (W)",
          },
          {
            name: "Electrical Energy",
            equation: "E = P × t = I × V × t",
            meaningAr: "الطاقة الكهربية = القدرة × الزمن",
            units: "Joules (J)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Electromotive Force (e.m.f.) vs Potential Difference (p.d.)",
            termAr: "القوة الدافعة الكهربية مقابل فرق الجهد",
            definition: "e.m.f. is the electrical energy provided by a power source per unit charge in driving it around a complete circuit. p.d. is the electrical energy converted to other forms per unit charge between two points.",
            definitionAr: "e.m.f هي الطاقة التي يزودها المصدر لكل وحدة شحنة؛ بينما p.d هو الطاقة المستهلكة أو المحولة لكل وحدة شحنة بين نقطتين.",
            markSchemeKeywords: ["energy provided per unit charge (e.m.f.)", "energy converted per unit charge (p.d.)"],
          },
          {
            term: "Fuse Rating & Earth Wire Action",
            termAr: "المصهر (Fuse) وسلك التأريض (Earth wire)",
            definition: "A fuse is a safety device with a thin wire that melts and breaks the circuit when current exceeds its rating. If a live wire touches a metal casing, current surges through the earth wire to ground, blowing the fuse and preventing electric shock.",
            definitionAr: "المصهر أداة أمان تحوي سلكاً رفيعاً ينصهر ويقطع الدائرة عند زيادة التيار. وسلك التأريض يفرغ التيار الزائد للأرض في حال ملامسة السلك الحي للهيكل المعدني.",
            markSchemeKeywords: ["wire melts when current exceeds rating", "breaks the live circuit"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Light Dependent Resistor (LDR) & Thermistor Behaviour",
            topicHeadingAr: "سلوك المقاومة الضوئية LDR والمقاومة الحرارية Thermistor",
            content: [
              "LDR (Light Dependent Resistor): Bright light → Resistance drops to low value (≈ 400 Ω). Dark conditions → Resistance rises to very high value (≈ 1 MΩ).",
              "Thermistor (NTC): Hot temperature → Resistance drops. Cold temperature → Resistance rises.",
              "Potential Divider Rule: Voltage across resistor R1 in series: V1 = V_in × [R1 / (R1 + R2)]. As resistance of component increases, it takes a larger share of the input voltage.",
            ],
            contentAr: [
              "المقاومة الضوئية LDR: في الضوء الساطع تنخفض مقاومتها جداً، وفي الظلام ترتفع لأكثر من 1 ميجا أوم.",
              "الثرمستور (المقاومة الحرارية NTC): عند ارتفاع الحرارة تنخفض المقاومة، وعند البرودة ترتفع المقاومة.",
              "مجزئ الجهد: المكون الذي تزداد مقاومته يأخذ النصيب الأكبر من جهد المصدر.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Combined Series-Parallel Circuit Analysis",
            question:
              "Two resistors of 10 Ω and 10 Ω are in parallel. This combination is connected in series with a 5 Ω resistor and a 12 V battery. Calculate: 1. The total equivalent resistance. 2. The main current leaving the battery.",
            given: "R_parallel = 10 Ω || 10 Ω, R_series = 5 Ω, V_total = 12 V",
            formula: "1/R_p = 1/10 + 1/10 → R_p = 5 Ω; R_total = R_p + 5 Ω; I_total = V / R_total",
            solutionSteps: [
              "Step 1: Calculate parallel combination: R_p = (10 × 10) / (10 + 10) = 5 Ω",
              "Step 2: Add series resistance: R_total = 5 Ω + 5 Ω = 10 Ω",
              "Step 3: Calculate current: I_total = 12 V / 10 Ω = 1.2 A",
            ],
            finalAnswer: "R_total = 10 Ω, Current I = 1.2 A",
            teacherInsightAr:
              "في المقاومات المتوازية المتطابقة: المقاومة المكافئة = قيمة الواحدة مقسومة على عددها (10 / 2 = 5 Ω).",
          },
        ],
      },
      {
        id: "b4-ch20",
        chapterNumber: "Chapter 20 & 21",
        titleEn: "Electromagnetic Effects, DC Motors, AC Generators & Transformers",
        titleAr: "القوى الكهرومغناطيسية، المحرك، المولد الكهربي، والمحولات الكهربية",
        syllabusRef: "Cambridge 4.4 & 4.5 Electromagnetism",
        keyOverview:
          "Fleming's Left-Hand Rule for motors (Force, Field, Current), DC Motor with split-ring commutator, Electromagnetic induction (Faraday's Law & Lenz's Law), AC Generator with slip rings, and Transformer equations for high-voltage power grids.",
        keyOverviewAr:
          "قاعدة فليمنج لليد اليسرى للمحرك الكهربي، دور عاكس التيار (Split-ring commutator)، الحث الكهرومغناطيسي، المولد المتردد مع حلقات الانزلاق (Slip rings)، ومعادلات المحول الكهربي ونقل القدرة بالضغط العالي.",
        coreFormulas: [
          {
            name: "Transformer Voltage Turns Ratio",
            equation: "V_p / V_s = N_p / N_s",
            meaningAr: "جهد الملف الابتدائي / جهد الثانوي = عدد لفات الابتدائي / عدد لفات الثانوي",
            units: "Ratio",
          },
          {
            name: "100% Ideal Transformer Power",
            equation: "I_p × V_p = I_s × V_s  →  I_s / I_p = V_p / V_s",
            meaningAr: "القدرة الداخلة للملف الابتدائي = القدرة الخارجة من الثانوي",
            units: "Watts (W)",
          },
          {
            name: "Transmission Power Loss in Cables",
            equation: "P_loss = I² × R",
            meaningAr: "الفقد الحراري في كابلات النقل = مربع التيار × مقاومة السلك",
            units: "Watts (W)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Fleming's Left-Hand Rule (Motor Rule)",
            termAr: "قاعدة فليمنج لليد اليسرى (للمحرك)",
            definition: "Used to determine the direction of force on a current-carrying conductor in a magnetic field: Thumb = Motion/Force, First finger = Field (North to South), seCond finger = Current (positive to negative).",
            definitionAr: "تحدد اتجاه القوة المحركة: الإبهام = اتجاه الحركة/القوة، السبابة = اتجاه المجال (شمال لجنوب)، الوسطى = اتجاه التيار الاصطلاحي.",
            markSchemeKeywords: ["Thumb = Motion / Force", "First finger = Field", "Second finger = Current"],
          },
          {
            term: "Why Electricity is Transmitted at Ultra-High Voltage",
            termAr: "لماذا تُنقل الكهرباء بجهد كهربائي فائق الارتفاع؟",
            definition: "Stepping up the voltage (V) reduces the transmission current (I) proportionally for the same power (P = IV). Since cable power losses depend on current squared (P_loss = I²R), a lower current drastically minimizes thermal energy losses in transmission cables.",
            definitionAr: "رفع الجهد يخفض شدة التيار بنفس النسبة؛ وبما أن فقد الطاقة في الأسلاك يتناسب مع مربع التيار (P = I²R)، فإن خفض التيار يقلل الفقد الحراري بدرجة هائلة.",
            markSchemeKeywords: ["high voltage means low current", "power loss = I²R is greatly reduced"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "DC Motor vs AC Generator Structural Comparison",
            topicHeadingAr: "مقارنة تركيبية دقيقة بين المحرك DC والمولد AC",
            content: [
              "DC Electric Motor: Converts Electrical Energy → Kinetic Energy. Uses Split-Ring Commutator to reverse current direction in the coil every half-turn (180°) to maintain continuous rotation in one direction.",
              "AC Generator: Converts Kinetic Energy → Electrical Energy. Uses Slip Rings and carbon brushes to keep continuous contact without reversing, producing alternating current (a.c.).",
              "Transformer Operation: Operates ONLY on A.C. because alternating current in the primary coil creates a continuously changing magnetic field in the iron core, which cuts through the secondary coil to induce an alternating voltage.",
            ],
            contentAr: [
              "المحرك الكهربي DC: يحول الطاقة الكهربية إلى حركية، ويستخدم عاكس تيار مشقوق (Split-ring) لعكس اتجاه التيار كل نصف دورة ليظل الدوران في نفس الاتجاه.",
              "المولد الكهربي AC: يحول الطاقة الحركية إلى كهربية، ويستخدم حلقتي انزلاق (Slip rings) لتوليد تيار متردد.",
              "المحول الكهربي: يعمل بالتيار المتردد فقط لأن التغير المستمر في المجال المغناطيسي هو شرط حث فرق الجهد في الملف الثانوي.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Step-Down Transformer & Current Calculation",
            question:
              "A mains step-down transformer has 2000 turns on its primary coil connected to a 240 V a.c. supply. The secondary coil delivers 12 V to a 24 W lamp. Assuming 100% efficiency, calculate: 1. The number of secondary turns. 2. The primary current.",
            given: "N_p = 2000, V_p = 240 V, V_s = 12 V, Power = 24 W",
            formula: "V_p / V_s = N_p / N_s; P = I_p × V_p",
            solutionSteps: [
              "Step 1: Calculate turns N_s = (V_s / V_p) × N_p = (12 / 240) × 2000 = (1/20) × 2000 = 100 turns",
              "Step 2: Calculate primary current: I_p = P / V_p = 24 W / 240 V = 0.10 A",
            ],
            finalAnswer: "N_s = 100 turns, Primary Current I_p = 0.10 A",
            teacherInsightAr:
              "في المحول الخافض للجهد (Step-down): يكون الجهد أقل، وعدد اللفات أقل، لكن شدة التيار تكون أكبر في الملف الثانوي.",
          },
        ],
      },
    ],
  },
  {
    unitId: "block-5",
    unitNumber: 5,
    blockTitleEn: "Block 5: Nuclear & Atomic Physics",
    blockTitleAr: "الوحدة الخامسة: الفيزياء الذرية، الإشعاع وعمر النصف",
    colorTheme: "from-rose-600 to-pink-500",
    chapters: [
      {
        id: "b5-ch22",
        chapterNumber: "Chapter 22 & 23",
        titleEn: "The Nuclear Atom, Radioactivity & Half-Life",
        titleAr: "بنية النواة، النشاط الإشعاعي، عمر النصف والتطبيقات الحياتية",
        syllabusRef: "Cambridge 5.1 & 5.2 Nuclear Physics",
        keyOverview:
          "Rutherford alpha scattering experiment, proton number (Z) and nucleon number (A), isotopes, alpha (α), beta (β), and gamma (γ) properties, radioactive decay equations, half-life calculations, and medical/industrial radioisotope uses.",
        keyOverviewAr:
          "تجربة رذرفورد لرقاقة الذهب واكتشاف النواة الموجبة المصمتة، العدد الذري والكتلي والنظائر، مقارنة إشعاعات ألفا وبيتا وجاما في القدرة على الاختراق والتأيين، معادلات الانحلال الإشعاعي، وحسابات عمر النصف.",
        coreFormulas: [
          {
            name: "Nucleon Number Equation",
            equation: "A = Z + N",
            meaningAr: "العدد الكتلي (A) = عدد البروتونات (Z) + عدد النيوترونات (N)",
            units: "Integer numbers",
          },
          {
            name: "Radioactive Half-Life Count Calculation",
            equation: "N_remaining = N_initial / (2^n)  (where n = total time / half-life)",
            meaningAr: "النشاط المتبقي = النشاط الابتدائي مقسوماً على 2 أس عدد فترات عمر النصف",
            units: "Counts/s or Becquerels (Bq)",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Isotopes",
            termAr: "النظائر",
            definition: "Atoms of the same element that have the same number of protons (same proton number Z) but different numbers of neutrons (different nucleon number A).",
            definitionAr: "أنوية لنفس العنصر تحتوي على نفس عدد البروتونات وتختلف في عدد النيوترونات والكتلة.",
            markSchemeKeywords: ["same number of protons", "different number of neutrons"],
          },
          {
            term: "Radioactive Half-Life",
            termAr: "عمر النصف الإشعاعي",
            definition: "The time taken for half the radioactive nuclei in a sample to decay (or the time for the activity / count rate to halve).",
            definitionAr: "الزمن اللازم لانحلال نصف أنوية العينة المشعة (أو هبوط النشاط الإشعاعي إلى النصف).",
            markSchemeKeywords: ["time taken for half the radioactive nuclei to decay", "time for activity to halve"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Alpha, Beta & Gamma Properties Comparison Table",
            topicHeadingAr: "جدول المقارنة الشامل بين إشعاعات ألفا وبيتا وجاما",
            content: [
              "Alpha (α) Particle: Helium nucleus (2 protons + 2 neutrons, ⁴₂He). Charge = +2. High mass. Highest ionising power. Absorbed by a thin sheet of paper or 5 cm of air. Deflected slightly towards negative plate in electric field.",
              "Beta (β) Particle: Fast-moving electron (⁰₋₁e). Charge = -1. Very small mass. Moderate ionising power. Penetrates paper; stopped by 3–5 mm of aluminium. Strongly deflected towards positive plate.",
              "Gamma (γ) Ray: High-frequency electromagnetic photon. Charge = 0. No mass. Lowest ionising power. Highly penetrating; only reduced by several centimetres of lead or thick concrete. Undeflected in electric/magnetic fields.",
            ],
            contentAr: [
              "جسيم ألفا (α): نواة هيليوم (2 بروتون + 2 نيوترون)، شحنته +2، أضعفها اختراقاً (توقفه ورقة)، وأعلاها قدرة على التأيين.",
              "جسيم بيتا (β): إلكترون سريع ينطلق من النواة (⁰₋₁e)، شحنته -1، تخترق الورق وتوقفها شريحة ألومنيوم 3-5 ملم.",
              "أشعة جاما (γ): موجات كهرومغناطيسية عالية التردد، بدون شحنة وبدون كتلة، وأعلاها قدرة على النفاذ (تخففها كتل الرصاص والخرسانة).",
            ],
          },
          {
            topicHeading: "Rutherford's Alpha Particle Scattering Experiment Findings",
            topicHeadingAr: "استنتاجات تجربة رذرفورد لرقاقة الذهب",
            content: [
              "1. Most alpha particles passed straight through undeflected → Atom is mostly empty space.",
              "2. A small fraction deflected through large angles → Positive charge is concentrated in a tiny central region (the nucleus).",
              "3. Very few (1 in 8000) bounced straight back (back-scattered) → Nucleus contains almost all the mass of the atom and is extremely dense.",
            ],
            contentAr: [
              "1. مرور معظم جسيمات ألفا دون انحراف ← الذرة معظمها فراغ.",
              "2. انحراف نسبة ضئيلة بزوايا حادة ← الشحنة الموجبة متركزة في نواة مركزية صغيرة جداً.",
              "3. ارتداد عدد نادر جداً للخلف ← النواة شديدة الكثافة وتتركز فيها كل كتلة الذرة تقريباً.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Half-Life Calculation with Background Radiation",
            question:
              "A radioactive isotope has an initial measured count rate of 260 counts/minute. The laboratory background radiation is 20 counts/minute. The isotope has a half-life of 4 hours. What will the measured count rate be after 12 hours?",
            given: "Initial measured = 260 cpm, Background = 20 cpm, Half-life = 4 h, Time = 12 h",
            formula: "Corrected initial = Measured - Background; Number of half-lives n = 12/4 = 3; Final measured = Remaining + Background",
            solutionSteps: [
              "Step 1: Subtract background to find actual sample activity: 260 - 20 = 240 cpm",
              "Step 2: Calculate number of half-lives: 12 hours / 4 hours = 3 half-lives",
              "Step 3: Halve activity 3 times: 240 → 120 (after 4h) → 60 (after 8h) → 30 cpm (after 12h)",
              "Step 4: Add background back for detector reading: 30 + 20 = 50 counts/minute",
            ],
            finalAnswer: "50 counts/minute",
            teacherInsightAr:
              "تريك امتحاني حاسم: اطرح دائماً إشعاع الخلفية (Background radiation) أولاً قبل التقسيم على فترات عمر النصف، ثم أعد إضافته في النهاية إذا طلب القراءة الكلية للجهاز.",
          },
        ],
      },
    ],
  },
  {
    unitId: "block-6",
    unitNumber: 6,
    blockTitleEn: "Block 6: Space Physics (Updated Syllabus)",
    blockTitleAr: "الوحدة السادسة: فيزياء الفضاء وعلم الفلك والكون",
    colorTheme: "from-indigo-600 to-cyan-500",
    chapters: [
      {
        id: "b6-ch24",
        chapterNumber: "Chapter 24",
        titleEn: "The Solar System, Stars & The Expanding Universe",
        titleAr: "النظام الشمسي، النجوم وتطورها، والكون المتمدد وإشعاع CMBR",
        syllabusRef: "Cambridge 6.1 & 6.2 Space Physics",
        keyOverview:
          "Planets in order, orbital speed (v = 2πr / T), life cycle of stars (nebula, main sequence, red giant/supergiant, white dwarf, supernova, neutron star, black hole), redshift of distant galaxies, Cosmic Microwave Background Radiation (CMBR), and Hubble's Law.",
        keyOverviewAr:
          "ترتيب كواكب المجموعة الشمسية، السرعة المدارية (v = 2πr / T)، دورة حياة النجوم من السديم إلى العملاق الأحمر والمستعر الأعظم والثقوب السوداء، الانزياح نحو الأحمر، وإشعاع الخلفية الكونية الميكروي CMBR كدليل على الانفجار العظيم.",
        coreFormulas: [
          {
            name: "Orbital Speed",
            equation: "v = (2 × π × r) / T",
            meaningAr: "السرعة المدارية = محيط المدار الدائري / الزمن الدوري للدورة الكاملة",
            units: "m/s or km/s",
          },
          {
            name: "Hubble's Law",
            equation: "v = H₀ × d",
            meaningAr: "سرعة ابتعاد المجرة = ثابت هابل (H₀) × بعد المجرة عن الأرض",
            units: "v in km/s, d in megaparsecs or km",
          },
        ],
        mustKnowDefinitions: [
          {
            term: "Redshift",
            termAr: "الانزياح نحو الأحمر (Redshift)",
            definition: "The increase in the observed wavelength of electromagnetic radiation emitted by distant stars and galaxies due to their motion away from Earth, proving the universe is expanding.",
            definitionAr: "زيادة الطول الموجي للضوء المرصود من المجرات البعيدة نتيجة ابتعادها عنا، مما يثبت تمدد نسيج الفضاء والكون.",
            markSchemeKeywords: ["increase in observed wavelength", "galaxies moving away", "evidence that universe is expanding"],
          },
          {
            term: "Cosmic Microwave Background Radiation (CMBR)",
            termAr: "إشعاع الخلفية الكونية الميكروي",
            definition: "Microwave radiation filling the entire universe, which is the cooled remnants of high-energy gamma radiation produced during the Big Bang.",
            definitionAr: "إشعاع كهرومغناطيسي ميكروي يملأ أرجاء الكون وهو بقايا الإشعاع الكوني الأولي المبرد الناتج عن لحظة الانفجار العظيم.",
            markSchemeKeywords: ["radiation filling the universe", "remnants of Big Bang"],
          },
        ],
        detailedTheory: [
          {
            topicHeading: "Life Cycle of Stars (Low-Mass vs High-Mass)",
            topicHeadingAr: "دورة حياة النجوم (النجوم كالشمس مقابل النجوم العملاقة)",
            content: [
              "1. Protostar: Gravitational collapse of a cloud of dust and gas (Nebula) until core temperature reaches millions of degrees.",
              "2. Main Sequence Star: Stable period where inward gravitational collapse is balanced by outward thermal pressure from nuclear fusion of hydrogen into helium (like our Sun).",
              "3. Star like Sun (Low Mass): Runs out of core hydrogen → Expands into Red Giant → Outer layers shed as Planetary Nebula → Core cools into dense White Dwarf.",
              "4. Massive Star (High Mass): Expands into Red Supergiant → Explodes violently in a Supernova → Leaves behind a Neutron Star or Black Hole.",
            ],
            contentAr: [
              "1. النجم الأولي (Protostar): انكماش سحابة الغبار والغاز بفعل الجاذبية حتى تبدأ تفاعلات الاندماج النووي.",
              "2. التتابع الرئيسي (Main Sequence): استقرار النجم لتوازن قوى الجاذبية للداخل مع ضغط الإشعاع النووي للخارج (مثل شمسنا).",
              "3. النجوم متوسطة الكتلة (كالشمس): تتحول لعملاق أحمر ثم سديم كوكبي ثم قزم أبيض كثيف.",
              "4. النجوم العملاقة: تنفجر في مستعر أعظم (Supernova) وتخلف نجماً نيوترونياً أو ثقباً أسود.",
            ],
          },
        ],
        workedProblems: [
          {
            title: "Calculating Earth Orbital Speed around the Sun",
            question:
              "Earth orbits the Sun in an approximately circular path of average orbital radius r = 1.5 × 10⁸ km with an orbital period of T = 365.25 days (3.15 × 10⁷ s). Calculate Earth's orbital speed in km/s.",
            given: "r = 1.5 × 10⁸ km, T = 3.15 × 10⁷ s",
            formula: "v = (2 × π × r) / T",
            solutionSteps: [
              "Step 1: Orbital distance = 2 × π × 1.5 × 10⁸ km ≈ 9.425 × 10⁸ km",
              "Step 2: Speed v = (9.425 × 10⁸ km) / (3.15 × 10⁷ s)",
              "Step 3: v ≈ 29.9 km/s (approx. 30 km/s)",
            ],
            finalAnswer: "29.9 km/s (or 29,900 m/s)",
            teacherInsightAr:
              "الكواكب الأبعد عن الشمس (مثل نبتون والمشتري) تدور بسرعة مدارية أبطأ بكثير لأن قوة جاذبية الشمس تقل مع زيادة المسافة.",
          },
        ],
      },
    ],
  },
];
