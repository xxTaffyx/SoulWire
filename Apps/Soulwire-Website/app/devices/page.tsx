import Link from "next/link"
import { ArrowRight, Shield, Battery, Radio, Wrench, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DevicesPage() {
  const deviceCategories = [
    {
      id: "personal",
      name: "Personal Devices",
      icon: "📱",
      count: 7,
      devices: [
        {
          name: "SoulPhone",
          description: "Your pocket-sized sanctuary",
          sizes: ["Mini (5″)", "Standard (6″)", "Plus (7″)"],
          variants: ["Standard", "Rugged", "Extreme"],
          features: ["2-day battery", "Hardware kill switches", "IP68 water resistant", "User-replaceable battery"],
        },
        {
          name: "SoulTablet",
          description: "Room to create, space to learn",
          sizes: ["8″", "11″ Pro", "13″ Max"],
          features: ["SoulPen included", "All-day battery", "120Hz display", "Desktop Realm compatible"],
        },
        {
          name: "SoulBook",
          description: "Your portable command center",
          sizes: ["13″ Air", "15″", "17″ Pro"],
          features: ["10-15hr battery", "Upgradeable RAM/storage", "Developer mode built-in", "Runs Linux apps"],
        },
        {
          name: "SoulPod",
          description: "Music returns to its purpose",
          variants: ["Shuffle (8GB)", "Classic (64GB)", "Touch (128GB)"],
          features: ["40+ hour playback", "Hi-res audio", "3.5mm jack + Bluetooth", "No distractions"],
        },
        {
          name: "SoulDesktop",
          description: "The heart of your digital home",
          variants: ["Mini", "Standard", "Pro"],
          features: ["User-upgradeable", "Silent operation", "SoulHome Hub capable", "Multiple drive bays"],
        },
      ],
    },
    {
      id: "wearables",
      name: "Wearables",
      icon: "⌚",
      count: 6,
      devices: [
        {
          name: "SoulWatch",
          description: "Health on your wrist, not in a database",
          features: ["5-7 day battery", "Full health sensors", "50m swim-proof", "Local data storage"],
          modes: ["Standard", "Fitness", "Medical", "Dive", "Outdoor", "Kid", "Elder", "Sleep"],
        },
        {
          name: "SoulBand",
          description: "Fitness without surveillance",
          features: ["14+ day battery", "Steps/sleep/heart rate", "Slim & lightweight", "Medical mode"],
        },
        {
          name: "SoulBuds",
          description: "Hear what matters",
          features: [
            "8hr buds + 24hr case",
            "Active noise cancellation",
            "Real-time translation",
            "No always-on listening",
          ],
        },
        {
          name: "SoulRing",
          description: "Discreet connection",
          features: ["5-7 day battery", "Full waterproof", "NFC payments", "Sleep tracking optimized"],
        },
        {
          name: "SoulPendant",
          description: "Safety around your neck",
          features: ["One-button SOS", "Fall detection", "7+ day battery", "Two-way voice"],
        },
        {
          name: "SoulGlass",
          description: "See more, share less",
          features: [
            "Physical camera cover",
            "Bone conduction audio",
            "Navigation & translation",
            "No facial recognition",
          ],
        },
      ],
    },
    {
      id: "professional",
      name: "Professional",
      icon: "👷",
      count: 9,
      devices: [
        {
          name: "SoulGrip",
          description: "Your hands are the interface",
          variants: ["Pro", "Thermal", "Arc", "Mech", "Lite", "Sterile", "Tactical", "Dive"],
          features: ["Standalone cellular", "Voice control", "Haptic notifications", "3-day battery"],
        },
        {
          name: "SoulHat",
          description: "Protection above, intelligence within",
          variants: ["Pro", "Mine", "Fire", "Rescue", "Climb", "Tactical"],
          features: ["Heads-up display", "Gas detection", "Impact sensors", "12hr battery"],
        },
        {
          name: "SoulVest",
          description: "Intelligence under the uniform",
          variants: ["Construction", "EMS", "Fire", "Police", "Security", "Athletic"],
          features: ["Biometric monitoring", "Impact detection", "Climate tracking", "Mesh networking"],
        },
        {
          name: "SoulBoot",
          description: "Every step tracked, every fall detected",
          features: ["Biometric sensors", "Terrain detection", "Fall detection", "Solar charging"],
        },
        {
          name: "SoulPack",
          description: "Your mobile command center",
          features: ["Solar panel array", "Extended battery", "First aid integration", "Satellite uplink"],
        },
        {
          name: "SoulSlate",
          description: "Job site computing",
          features: ["Rugged tablet", "IP68 rated", "Glove touch", "Emergency beacon"],
        },
        {
          name: "SoulBoard",
          description: "Tactical keyboard",
          features: ["Mechanical switches", "Backlit", "Programmable", "Sealed design"],
        },
        {
          name: "SoulPen",
          description: "Professional stylus",
          features: ["4096 pressure levels", "Tilt detection", "Button shortcuts", "Universal compatibility"],
        },
        {
          name: "SoulClip",
          description: "Badge computer",
          features: ["Access control", "Location tracking", "Emergency alert", "1-week battery"],
        },
      ],
    },
    {
      id: "home",
      name: "Home System",
      icon: "🏠",
      count: 8,
      devices: [
        {
          name: "SoulHome Hub",
          description: "Central home intelligence",
          features: [
            "Offline-first operation",
            "No cloud dependency",
            "Family account management",
            "Local voice processing",
          ],
        },
        {
          name: "SoulSensor",
          description: "Environment monitoring",
          features: ["Air quality", "Temperature/humidity", "Motion detection", "No camera"],
        },
        {
          name: "SoulCam",
          description: "Privacy-first camera",
          features: ["Physical shutter", "Local storage only", "No cloud uploads", "Activity zones"],
        },
        {
          name: "SoulLock",
          description: "Smart door locks",
          features: ["Biometric + key backup", "Offline operation", "Visitor logs local", "Battery backup"],
        },
        {
          name: "SoulBell",
          description: "Doorbell with respect",
          features: ["No recording strangers", "Local storage", "Two-way audio", "Battery powered"],
        },
        {
          name: "SoulPlug",
          description: "Smart outlets",
          features: ["Energy monitoring", "Schedule control", "Offline operation", "No data collection"],
        },
        {
          name: "SoulSwitch",
          description: "Smart light switches",
          features: ["Standard wiring", "Manual override", "Scene control", "Works offline"],
        },
        {
          name: "SoulStat",
          description: "Smart thermostat",
          features: ["Learning algorithms local", "Energy optimization", "Manual control priority", "No surveillance"],
        },
      ],
    },
    {
      id: "vehicle",
      name: "Vehicle",
      icon: "🚗",
      count: 6,
      devices: [
        {
          name: "SoulDrive Hub",
          description: "Vehicle intelligence center",
          features: ["Trip logging", "Maintenance tracking", "Emergency SOS", "Works with any vehicle"],
        },
        {
          name: "SoulDrive Cam",
          description: "Dashboard camera",
          features: ["Incident recording", "Parking mode", "Local storage", "Emergency upload only"],
        },
        {
          name: "SoulDrive OBD",
          description: "Vehicle diagnostics",
          features: ["Real-time diagnostics", "Fuel efficiency", "Check engine decoder", "No location tracking"],
        },
        {
          name: "SoulDrive Track",
          description: "Fleet management",
          features: ["Business use", "Route optimization", "Driver behavior", "Privacy controls"],
        },
        {
          name: "SoulMoto",
          description: "Motorcycle computer",
          features: ["Helmet integration", "Lean angle tracking", "Group ride coordination", "Emergency beacon"],
        },
        {
          name: "SoulMarine",
          description: "Boat computer",
          features: ["Navigation integration", "Weather monitoring", "Man overboard alert", "Waterproof"],
        },
      ],
    },
    {
      id: "pet",
      name: "Pet & Animal",
      icon: "🐾",
      count: 7,
      devices: [
        {
          name: "SoulCollar",
          description: "Pet tracker & monitor",
          features: ["GPS location", "Health monitoring", "Virtual fence", "Waterproof"],
        },
        {
          name: "SoulTag",
          description: "NFC pet ID",
          features: ["Emergency info", "Vet records", "No battery needed", "Lifetime registration"],
        },
        {
          name: "SoulChip",
          description: "Microchip with privacy",
          features: ["ISO standard", "Encrypted data", "Owner-controlled access", "Lifetime registration"],
        },
        {
          name: "SoulFeeder",
          description: "Smart pet feeder",
          features: ["Portion control", "Schedule feeding", "Camera optional", "Works offline"],
        },
        {
          name: "SoulPet Cam",
          description: "Pet monitoring camera",
          features: ["Two-way audio", "Treat dispenser", "Local storage", "Motion alerts"],
        },
        {
          name: "SoulHerd",
          description: "Livestock monitoring",
          features: ["Health tracking", "Location fencing", "Birth detection", "Long-range mesh"],
        },
        {
          name: "SoulK9",
          description: "Working dog gear",
          features: ["Tactical vest integration", "Handler communication", "Vital monitoring", "Camera mount"],
        },
      ],
    },
    {
      id: "health",
      name: "Health & Medical",
      icon: "🩺",
      count: 11,
      devices: [
        {
          name: "SoulHealth Hub",
          description: "Personal health station",
          features: ["Device coordination", "Trend analysis", "Emergency protocols", "Local storage"],
        },
        {
          name: "SoulHealth Band",
          description: "Medical-grade monitoring",
          features: ["Continuous monitoring", "FDA approved", "Hospital integration", "Emergency alerts"],
        },
        {
          name: "SoulPatch",
          description: "Continuous glucose monitor",
          features: ["14-day sensor", "Insulin integration", "Trend alerts", "Caregiver sharing"],
        },
        {
          name: "SoulScale",
          description: "Smart body scale",
          features: ["Full body composition", "Trend tracking", "Multi-user", "Private data"],
        },
        {
          name: "SoulCuff",
          description: "Blood pressure monitor",
          features: ["Medical accuracy", "Irregular heartbeat detection", "Sharing with doctor", "Local storage"],
        },
        {
          name: "SoulPulse",
          description: "Pulse oximeter",
          features: ["SpO2 + heart rate", "Perfusion index", "Continuous mode", "Alert thresholds"],
        },
        {
          name: "SoulTemp",
          description: "Smart thermometer",
          features: ["Instant reading", "Fever tracking", "Family profiles", "Symptom logging"],
        },
        {
          name: "SoulPill",
          description: "Medication tracker",
          features: ["Smart pill bottle", "Dose reminders", "Refill alerts", "Caregiver notifications"],
        },
        {
          name: "SoulInhaler",
          description: "Smart inhaler",
          features: ["Usage tracking", "Technique coaching", "Dose counter", "Trigger logging"],
        },
        {
          name: "SoulBreath",
          description: "Lung function monitor",
          features: ["Peak flow", "FEV1 measurement", "Asthma management", "Doctor sharing"],
        },
        {
          name: "SoulAED",
          description: "Automated external defibrillator",
          features: ["Public/home use", "CPR guidance", "Emergency coordination", "Self-test monitoring"],
        },
      ],
    },
    {
      id: "environment",
      name: "Environment",
      icon: "🌡️",
      count: 2,
      devices: [
        {
          name: "SoulSensor Outdoor",
          description: "Weather & environment",
          features: ["Air quality", "Weather station", "UV index", "Pollen tracking"],
        },
        {
          name: "SoulWeather Station",
          description: "Professional weather monitoring",
          features: ["Temperature/humidity/pressure", "Wind speed/direction", "Rainfall", "Lightning detection"],
        },
      ],
    },
    {
      id: "community",
      name: "Community",
      icon: "🏛️",
      count: 3,
      devices: [
        {
          name: "SoulKiosk",
          description: "Public information terminal",
          features: ["Community resources", "Anonymous access", "Emergency info", "Multi-language"],
        },
        {
          name: "SoulTerminal",
          description: "Public internet access",
          features: ["Privacy-first browsing", "Session wiping", "Accessibility features", "Free to use"],
        },
        {
          name: "SoulAccess Band",
          description: "Community ID & access",
          features: ["Library card", "Transit pass", "Building access", "No tracking"],
        },
      ],
    },
  ]

  const specs = [
    { feature: "Waterproof", value: "IP69K certified" },
    { feature: "Durability", value: "MIL-STD-810H military grade" },
    { feature: "Emergency", value: "Dead-battery SOS mode" },
    { feature: "Security", value: "Hardware privacy switches" },
    { feature: "Connectivity", value: "Mesh networking built-in" },
    { feature: "Support", value: "10-year software updates" },
    { feature: "Repair", value: "User-replaceable components" },
    { feature: "Destruction", value: "Emergency beacon if destroyed" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-4xl mb-4">📱</div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance tracking-tight">
              Hardware that <span className="text-primary">lasts</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance">
              59 devices built for decades, not disposal. One free device per person.
            </p>
          </div>
        </div>
      </section>

      {/* Modular Philosophy */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="The Modular Philosophy"
            subtitle="Instead of 350 separate devices, we build core platforms that adapt"
            className="mb-16"
          />

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-background border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="grid md:grid-cols-5 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl">🔧</div>
                    <h4 className="font-semibold text-sm">Layer 1</h4>
                    <p className="text-xs text-muted-foreground">Core Device</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl">💪</div>
                    <h4 className="font-semibold text-sm">Layer 2</h4>
                    <p className="text-xs text-muted-foreground">Variant (durability)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl">🧩</div>
                    <h4 className="font-semibold text-sm">Layer 3</h4>
                    <p className="text-xs text-muted-foreground">Case/Attachment</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl">⚙️</div>
                    <h4 className="font-semibold text-sm">Layer 4</h4>
                    <p className="text-xs text-muted-foreground">Profile/Mode</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl">🔮</div>
                    <h4 className="font-semibold text-sm">Layer 5</h4>
                    <p className="text-xs text-muted-foreground">Realm Integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Card className="bg-primary/5 border-primary/30">
                <CardContent className="pt-6 space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Benefits
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Cheaper — One device platform, many uses</li>
                    <li>• Simpler — Everything works the same</li>
                    <li>• Repairable — Standard parts across product line</li>
                    <li>• Upgradeable — New attachments work with existing devices</li>
                    <li>• Sustainable — Less waste, less buying</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent/30">
                <CardContent className="pt-6 space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-accent" />
                    Example: SoulPhone
                  </h4>
                  <ul className="space-y-2 text-muted-foreground text-xs">
                    <li>Base: SoulPhone Standard</li>
                    <li>+ Rugged Variant (construction)</li>
                    <li>+ Depth Case 100 (diving)</li>
                    <li>+ Medical Mode (monitoring)</li>
                    <li>+ Health Realm integration</li>
                    <li className="text-primary pt-2">= One device, five use cases</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-destructive/5 border-destructive/30">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Current Reality</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>2-3 year device lifespan by design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Software updates stopped after 2 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Non-replaceable batteries and parts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>$1000+ every few years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">✕</span>
                    <span>Mountains of e-waste</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/30">
              <CardContent className="pt-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">SoulWire Promise</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>10+ year device lifespan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Full support for device lifetime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>User-replaceable everything</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>One device free per person</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Built to repair, not replace</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Device Categories */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Complete Device Catalog" subtitle="59 devices across 9 categories" className="mb-16" />

          <Tabs defaultValue="personal" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 mb-8 h-auto">
              {deviceCategories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="text-xs sm:text-sm flex flex-col py-3">
                  <span className="text-lg mb-1">{cat.icon}</span>
                  <span className="hidden lg:inline">{cat.name}</span>
                  <span className="lg:hidden">{cat.name.split(" ")[0]}</span>
                  <span className="text-xs text-muted-foreground">({cat.count})</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {deviceCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <Card className="bg-background border-border/50">
                  <CardContent className="pt-6">
                    <Accordion type="single" collapsible className="w-full">
                      {cat.devices.map((device, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex flex-col items-start">
                              <span className="font-semibold text-foreground">{device.name}</span>
                              <span className="text-sm text-muted-foreground">{device.description}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 pt-4">
                              {device.sizes && (
                                <div>
                                  <h5 className="text-sm font-semibold text-foreground mb-2">Sizes</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {device.sizes.map((size, i) => (
                                      <span
                                        key={i}
                                        className="text-xs px-3 py-1.5 rounded-md bg-primary text-primary-foreground font-medium border border-primary/50"
                                      >
                                        {size}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {device.variants && (
                                <div>
                                  <h5 className="text-sm font-semibold text-foreground mb-2">Variants</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {device.variants.map((variant, i) => (
                                      <span
                                        key={i}
                                        className="text-xs px-3 py-1.5 rounded-md bg-accent text-accent-foreground font-medium border border-accent/50"
                                      >
                                        {variant}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {device.modes && (
                                <div>
                                  <h5 className="text-sm font-semibold text-foreground mb-2">Modes</h5>
                                  <div className="flex flex-wrap gap-2">
                                    {device.modes.map((mode, i) => (
                                      <span
                                        key={i}
                                        className="text-xs px-3 py-1.5 rounded-md bg-violet-500 text-white font-medium border border-violet-600"
                                      >
                                        {mode}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {device.features && (
                                <div>
                                  <h5 className="text-sm font-semibold text-foreground mb-2">Key Features</h5>
                                  <ul className="space-y-1">
                                    {device.features.map((feature, i) => (
                                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                        <span className="text-primary mt-0.5">•</span>
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Device Specs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Technical Specifications" subtitle="Built for the real world" className="mb-16" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {specs.map((spec) => (
              <Card key={spec.feature} className="bg-card border-border/50">
                <CardContent className="pt-6 text-center space-y-3">
                  <h3 className="font-semibold text-foreground">{spec.feature}</h3>
                  <p className="text-sm text-muted-foreground">{spec.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <Card className="bg-card border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Privacy Hardware</h3>
                    <p className="text-muted-foreground">
                      Physical switches to disconnect camera, microphone, and wireless radios. When it's off, it's
                      REALLY off - no software can override.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Battery className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Dead-Battery SOS</h3>
                    <p className="text-muted-foreground">
                      Even with 0% battery, devices can send emergency location pings for 48 hours using reserve power.
                      Because safety doesn't end when your battery dies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/50">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Radio className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Mesh Networking</h3>
                    <p className="text-muted-foreground">
                      SoulWire devices can communicate with each other directly, creating resilient networks even when
                      cellular towers are down.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Transparency */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Cost Transparency" subtitle="What you pay, what it costs" className="mb-12" />

          <div className="max-w-3xl mx-auto">
            <Card className="bg-background border-border/50">
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <span className="text-muted-foreground">Component Cost</span>
                    <span className="text-foreground font-mono">$180</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <span className="text-muted-foreground">Manufacturing</span>
                    <span className="text-foreground font-mono">$50</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <span className="text-muted-foreground">Quality Control</span>
                    <span className="text-foreground font-mono">$20</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <span className="text-muted-foreground">Shipping & Support</span>
                    <span className="text-foreground font-mono">$20</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b-2 border-primary/30">
                    <span className="text-muted-foreground">Our Margin (8%)</span>
                    <span className="text-foreground font-mono">$22</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-semibold pt-2">
                    <span className="text-foreground">SoulPhone Price</span>
                    <span className="text-primary font-mono">$292</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3 text-center border-t border-border/50">
                  <p className="text-sm text-muted-foreground">Compare to industry standard:</p>
                  <div className="flex items-center justify-center gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Apple/Samsung markup</p>
                      <p className="text-2xl font-bold text-destructive">150%+</p>
                    </div>
                    <div className="text-muted-foreground text-2xl">vs</div>
                    <div>
                      <p className="text-xs text-muted-foreground">SoulWire markup</p>
                      <p className="text-2xl font-bold text-primary">8%</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-lg text-foreground font-medium mb-2">One device free per person</p>
              <p className="text-sm text-muted-foreground">
                Everyone deserves access to privacy and security, regardless of income
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Hardware you can trust</h2>
            <p className="text-lg text-muted-foreground">
              59 devices. Built to last. Designed to protect. Priced fairly.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#newsletter">
                Follow the Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
