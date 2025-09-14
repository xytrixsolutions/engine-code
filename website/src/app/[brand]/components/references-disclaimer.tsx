import { ExternalLink, FileText, Lock, Mail, Shield } from "lucide-react";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ReferencesDisclaimers() {
  return (
    <Container spaceY={8}>
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-balance flex items-center justify-center gap-2">
          <FileText className="h-8 w-8" />
          References, Disclaimers & Sources
        </h2>
        <p className="text-lg text-muted-foreground text-pretty">
          Transparency, Compliance, and Authority for enginecode.uk
        </p>
        <p className="text-base text-muted-foreground text-pretty">
          EngineCode.uk is an independent technical resource dedicated to
          providing accurate, non-commercial engine data for BMW and related
          powertrains. This section outlines our sources, disclaimers, and
          compliance policies in accordance with Google's E-E-A-T (Experience,
          Expertise, Authoritativeness, Trustworthiness) guidelines.
        </p>
      </div>

      {/* About EngineCode.uk */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            About EngineCode.uk
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">
            EngineCode.uk is operated by <strong>Engine Finders UK Ltd</strong>{" "}
            as a standalone reference platform. We are{" "}
            <strong>not affiliated</strong> with BMW AG, MINI, Toyota Motor
            Corporation, Land Rover, Alpina Automobile, or any other
            manufacturer or trademark holder. All content is created
            independently for educational and diagnostic purposes only. The BMW
            name, logo, and engine codes are trademarks of BMW AG, Munich,
            Germany.
          </p>
        </CardContent>
      </Card>

      {/* Primary Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Primary Sources & References</CardTitle>
          <CardDescription>
            All technical data is sourced from official OEM and regulatory
            publications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ExternalLink className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="https://www.bmwgroup.com/en.html"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline font-medium"
                  >
                    BMW Group
                  </a>
                  <span className="text-muted-foreground">
                    {" "}
                    – Product Technical Reports (PT-2023), Annual Reports,
                    Sustainability Reports
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="https://www.bmw-techinfo.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline font-medium"
                  >
                    BMW TIS / ISTA
                  </a>
                  <span className="text-muted-foreground">
                    {" "}
                    – Service Information, Repair Manuals, SI Bulletins (e.g.,
                    SI B11 03 08)
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline font-medium"
                  >
                    EU Regulation (EC) No 715/2007
                  </a>
                  <span className="text-muted-foreground">
                    {" "}
                    – Type-approval of light-duty vehicles
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32017R1151"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline font-medium"
                  >
                    Commission Regulation (EU) 2017/1151
                  </a>
                  <span className="text-muted-foreground">
                    {" "}
                    – WLTP and RDE testing procedures
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="https://www.gov.uk/vehicle-approval"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline font-medium"
                  >
                    UK DVLA Vehicle Approval & V5C Guidelines
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ExternalLink className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <a
                    href="https://www.gov.uk/change-engine-mot"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary hover:underline font-medium"
                  >
                    DVLA: Engine Changes and MoT Compliance
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Image & Copyright Disclaimer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Image & Copyright Disclaimer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">
            All engine and vehicle images used on this site are for{" "}
            <strong>technical identification and educational purposes</strong>{" "}
            under fair use principles. If you believe any image infringes your
            copyright, please contact us at{" "}
            <a
              href="mailto:copyrights@enginecode.uk"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              <Mail className="h-3 w-3" />
              copyrights@enginecode.uk
            </a>
            . We will review the claim promptly and remove or license the
            content as required.
          </p>
        </CardContent>
      </Card>

      {/* GDPR Compliance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            GDPR & Data Privacy Compliance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed">
            EngineCode.uk complies with the UK General Data Protection
            Regulation (UK GDPR) and the EU GDPR. We do not collect personal
            data through this platform unless explicitly provided (e.g., contact
            forms). For data access, correction, or deletion requests, please
            email{" "}
            <a
              href="mailto:gdpr@enginecode.uk"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              <Mail className="h-3 w-3" />
              gdpr@enginecode.uk
            </a>
            . Our full Privacy Policy is available at{" "}
            <a href="/privacy" className="text-primary hover:underline">
              enginecode.uk/privacy
            </a>
            .
          </p>
        </CardContent>
      </Card>

      {/* No Commercial Affiliation */}
      <Card>
        <CardHeader>
          <CardTitle>No Commercial Affiliation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm leading-relaxed">
              This website contains no paid endorsements, affiliate links, or
              commercial partnerships. We do not sell parts, services, or
              recommendations. Our mission is to provide{" "}
              <strong>accurate, verifiable, and neutral technical data</strong>{" "}
              to support vehicle owners, restorers, and technicians across the
              UK and Europe.
            </p>
            <Badge variant="outline" className="text-xs">
              Independent & Non-Commercial
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Source Disclaimer */}
      <Card className="bg-muted/30 border-l-4 border-l-primary">
        <CardContent className="pt-6">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <sup>†</sup> All engine specifications, compatibility data, and
            production facts are verified against{" "}
            <a
              href="https://www.bmwgroup.com/en.html"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              BMW Group official documentation{" "}
              <ExternalLink className="h-3 w-3" />
            </a>{" "}
            and{" "}
            <a
              href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32007R0715"
              target="_blank"
              rel="noreferrer noopener"
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              EU type-approval regulations <ExternalLink className="h-3 w-3" />
            </a>
            . Information is accurate as of 2025.
          </p>
        </CardContent>
      </Card>
    </Container>
  );
}
