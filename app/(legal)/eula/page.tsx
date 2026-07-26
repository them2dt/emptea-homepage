import type { Metadata } from "next";
import {
  Item,
  LegalBody,
  LegalHeader,
  LegalIntro,
  LegalSection,
  List,
  MailLink,
  P,
} from "@/components/legal";

export const metadata: Metadata = {
  title: "End User License Agreement",
  description:
    "End User License Agreement (EULA) for the mobile applications published by emptea studios.",
  alternates: { canonical: "/eula" },
};

export default function EulaPage() {
  return (
    <>
      <LegalHeader title="End User License Agreement" updated="July 2026" />

      <LegalBody>
        <LegalIntro>
          This End User License Agreement (the &ldquo;Agreement&rdquo;) is a
          binding agreement between you and emptea studios, operated by Maruthan
          Thanabalasingam, Switzerland (the &ldquo;Licensor&rdquo;), covering the
          mobile applications we publish (each, the &ldquo;Application&rdquo;).
          It is concluded between you and the Licensor only, not with Apple Inc.
          or Google LLC.
        </LegalIntro>

        <LegalSection title="Licence grant">
          <P>
            The Licensor grants you a limited, non-exclusive, non-transferable,
            revocable licence to install and use the Application on any device
            that you own or control, for your personal, non-commercial use, as
            permitted by the usage rules of the store you obtained it from
            (including the Apple Media Services Terms and the Google Play Terms
            of Service). This licence does not transfer ownership of the
            Application to you.
          </P>
        </LegalSection>

        <LegalSection title="Restrictions">
          <P>You may not:</P>
          <List>
            <Item>
              Copy, modify, translate, or create derivative works of the
              Application, except as permitted by the store&apos;s usage rules.
            </Item>
            <Item>
              Reverse engineer, decompile, or disassemble the Application, except
              to the extent that restriction is prohibited by applicable law.
            </Item>
            <Item>
              Rent, lease, lend, sell, sublicense, or redistribute the
              Application.
            </Item>
            <Item>
              Remove or alter proprietary notices, or circumvent technical
              protection measures.
            </Item>
            <Item>
              Use the Application in violation of any applicable law or
              third-party right.
            </Item>
          </List>
        </LegalSection>

        <LegalSection title="Intellectual property">
          <P>
            The Application, including its code, design, trademarks, and content
            supplied by the Licensor, remains the property of the Licensor and
            its licensors and is protected by copyright and other laws. All
            rights not expressly granted to you are reserved.
          </P>
        </LegalSection>

        <LegalSection title="Content, services, and connectivity">
          <P>
            The Application may require internet access and may make third-party
            content and services available. The Licensor is not responsible for
            third-party content, and your use of it may be subject to additional
            terms. Data charges from your carrier are your responsibility.
          </P>
        </LegalSection>

        <LegalSection title="Maintenance and support">
          <P>
            The Licensor is solely responsible for providing any maintenance and
            support for the Application. Apple and Google have no obligation
            whatsoever to furnish any maintenance or support services. Support
            requests go to <MailLink />.
          </P>
        </LegalSection>

        <LegalSection title="Warranty">
          <P>
            To the maximum extent permitted by law, the Application is provided
            &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, with all faults
            and without warranty of any kind. The entire risk as to satisfactory
            quality, performance, and accuracy is with you.
          </P>
          <P>
            In the event of any failure of the Application to conform to an
            applicable warranty, you may notify Apple, and Apple will refund the
            purchase price of the Application to you. To the maximum extent
            permitted by law, Apple will have no other warranty obligation
            whatsoever with respect to the Application, and any other claims,
            losses, liabilities, damages, costs, or expenses attributable to any
            failure to conform to any warranty will be the Licensor&apos;s sole
            responsibility.
          </P>
        </LegalSection>

        <LegalSection title="Limitation of liability">
          <P>
            To the extent not prohibited by law, the Licensor is not liable for
            personal injury or any incidental, special, indirect, or
            consequential damages whatsoever, including loss of profits, loss of
            data, or business interruption, arising out of or related to your use
            of or inability to use the Application, regardless of the theory of
            liability and even if the Licensor has been advised of the
            possibility of such damages. Nothing here excludes liability that
            cannot lawfully be excluded.
          </P>
        </LegalSection>

        <LegalSection title="Product and intellectual property claims">
          <P>
            The Licensor, not Apple or Google, is responsible for addressing any
            claims relating to the Application or your use of it, including
            product liability claims, any claim that the Application fails to
            conform to a legal or regulatory requirement, and claims arising
            under consumer protection or similar legislation.
          </P>
          <P>
            In the event of a third-party claim that the Application or your
            possession and use of it infringes that party&apos;s intellectual
            property rights, the Licensor — not Apple or Google — will be solely
            responsible for the investigation, defence, settlement, and discharge
            of that claim.
          </P>
        </LegalSection>

        <LegalSection title="Legal compliance">
          <P>
            You represent that you are not located in a country subject to a U.S.
            Government embargo or designated as a &ldquo;terrorist
            supporting&rdquo; country, and that you are not listed on any U.S.
            Government list of prohibited or restricted parties.
          </P>
        </LegalSection>

        <LegalSection title="Third-party beneficiary">
          <P>
            Apple Inc. and its subsidiaries are third-party beneficiaries of this
            Agreement for Applications obtained from the App Store, and upon your
            acceptance, Apple will have the right (and will be deemed to have
            accepted the right) to enforce this Agreement against you as a
            third-party beneficiary.
          </P>
        </LegalSection>

        <LegalSection title="Term and termination">
          <P>
            This Agreement is effective until terminated by you or the Licensor.
            Your rights terminate automatically if you fail to comply with any of
            its terms. On termination, stop all use of the Application and delete
            all copies of it.
          </P>
        </LegalSection>

        <LegalSection title="Governing law">
          <P>
            This Agreement is governed by Swiss law, excluding its conflict of
            law rules, without limiting any mandatory consumer rights in your
            country of residence.
          </P>
        </LegalSection>

        <LegalSection title="Contact">
          <P>
            Questions about this Agreement: <MailLink />. Postal address
            available on request.
          </P>
        </LegalSection>
      </LegalBody>
    </>
  );
}
