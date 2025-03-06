import { useEffect } from "react";

const Terms = () => {
    const termsData = [
        {
            title: "1. General provisions",
            clauses: [
                "\n1.1. The Affiliate shall familiarize themselves with the terms and conditions of the Affiliate Program and accept them prior to commencing work with the Company.",
                "\n1.3. The Affiliate shall bear sole responsibility for the security and storage of personal data, including their login details and password. The Company shall not be responsible for any loss of personal data by the Affiliate and/or transfer thereof to third parties.",
                "\n1.4. Under the terms of the Affiliate Program, the Company reserves the right to refuse to cooperate with any Affiliate, and is not obliged to substantiate its refusal.",
                "\n1.5. The Company retains the sole right to alter, amend, or revise this Agreement without prior notification to the Affiliate. Any alterations or amendments will take effect immediately upon posting on the Company’s Resources. The Company may, but shall not be obliged to notify the Affiliate of such changes. The Affiliate is responsible for regularly checking this Agreement and the Affiliate’s Resources for changes. Continued participation in the Affiliate Program after any amendments are posted indicates the Affiliate’s acceptance of the new version of the Agreement. The Agreement in force shall be the version that is posted on the Affiliate Program website.",
                "\n1.6. The Affiliate may register with the Affiliate Program only once. Re-registration, including as a sub-affiliate, is strictly prohibited."
            ]
        },
        {
            title: "2. Posting of Advertising Materials",
            clauses: [
                "\n2.1. Cooperation between the parties as part of the Affiliate Program involves the posting of Advertising Materials on the Affiliate's Resources.",
                "\n2.2. When placing and distributing Advertising Materials while working with the Company, the Affiliate undertakes to comply with all applicable legislation, regulatory requirements, and ethical standards, and shall only use Advertising Materials that have been approved by the Company.",
                "\n2.3. If the Affiliate develops Advertising Materials, the Affiliate undertakes to obtain the Company's prior written consent before posting them.",
                "\n2.4. The Affiliate undertakes to ensure that any Advertising Materials posted are up to date.",
                "\nIt is forbidden to post Advertising Materials that contain:\n– incorrect terms for promotions, bonuses, and special offers\n– outdated creatives\n– an out-of-date Company logo\n– the Company name or together with links to competitors' websites\nIf an Affiliate posts outdated Advertising Materials, the Company reserves the right to block the Affiliate account.",
                "\n2.5. The Affiliate shall ensure that their posting of Advertising Materials complies with the laws of the country in which they are posted, and in the event of any claims from regulators and/or third parties.",
                "\nIf Advertising Materials on the Affiliate’s Resource are found to be in violation of this Agreement, the Affiliate will receive a warning and be asked to replace such materials within 5 (five) working days.",
                "\nIf the Affiliate does not then post up-to-date Advertising Materials in accordance with the Company's requirements, the Company reserves the right to block Payouts until up-to-date Advertising Materials are posted.",
                "\nIf the Agreement is violated regularly, the Company has the right to terminate this Agreement with the Affiliate without paying any Commission."
            ]
        },
        {
            title: " 3. Affiliate Resources",
            clauses: [
                "\n3.1. When registering, the Affiliate undertakes to provide comprehensive information about the Affiliate's Resources that will be used by the Company under the Affiliate Program.",
                "\n3.2. The Affiliate shall be fully and solely responsible for the operation and content of the Affiliate Resource or Resources where the Advertising Materials are placed.",
                "\n2.3. If the Affiliate develops Advertising Materials, the Affiliate undertakes to obtain the Company's prior written consent before posting them.",
                "\n3.3 The Affiliate guarantees that the activities of the Affiliate Resource/s comply with current legislation and undertakes to prevent the placement of materials on their resource/s that are defamatory, age-restricted, illegal, harmful, threatening, obscene, racially or ethnically intolerant, or are in any other way objectionable or discriminatory, coercive, politically sensitive, or otherwise contradictory to or in violation of the rights of the Company or the rights of third parties."
            ]
        },
        {
            title: " 4. Intellectual Property",
            clauses: [
                "\n4.1. To the extent necessary for the Affiliate to fulfill their obligations under this Agreement, the Affiliate is granted a free, non-exclusive license throughout the term of this Agreement to use the Company's trademarks, logos, and other intellectual property provided by the Company for the purposes of executing this Agreement. This license does not transfer to the Affiliate any ownership rights to the Company's intellectual property, and the Company fully retains its intellectual property rights.",
                "\n4.2. If, while cooperating with the Company under this Agreement, the Affiliate develops Advertising Materials for the Company, the exclusive intellectual property rights to such Advertising Materials will be transferred to the Company from the moment they are created. The Commission includes payment for the development of Advertising Materials and for the transfer of all intellectual property rights to said materials.",
                "\n4.3. The Affiliate undertakes not to copy, in part or in full, the external design of the Company's Resources and Brand, or any websites containing trademarks and other intellectual property registered by the Company.",
                "\n4.4. The Affiliate’s Resources should not create the false impression that they are directly managed by the Company or Brand.",
                "\n4.5. The Affiliate does not have the right to use the Company’s logos, graphics, or marketing materials without the consent of representatives of the Company, except when using the Advertising Materials provided by the Company under the Affiliate Program.",
                "\n4.6. The Affiliate must not register or use the name of the Brand, or any name that is similar to the Brand to the point of confusion, or the names of other brands pertaining to the Company in any part of the address (domain) of the Affiliate’s website, internal pages, or mobile applications. This includes the use of any name that fully or partly consists of a trademark pertaining to the Company or that could be confused with said trademark. In such cases, the Affiliate accepts the Company’s right to determine the likelihood of confusion",
                "\n4.7. The Affiliate may not acquire/register/use keywords, search queries, meta tags, or other identifiers for use in any search engine, portal, advertising service, or other search/reference service that are identical or similar to the Brand, to any trademarks pertaining to the Company, or to any other brand owned by the Company.",
                "\n4.7. The Affiliate may not acquire/register/use keywords, search queries, meta tags, or other identifiers for use in any search engine, portal, advertising service, or other search/reference service that are identical or similar to the Brand, to any trademarks pertaining to the Company, or to any other brand owned by the Company.",
                "\n4.8. The Affiliate does not have the right to create pages and/or groups on any social networks (including, but not limited to Facebook, Twitter, etc.) that may be misinterpreted as pages or groups pertaining to the Company. \n The Affiliate also agrees not to create or distribute mobile, web apps or websites that may be misinterpreted as apps or websites pertaining to the Brand and/or the Company.",
                "\n4.9. In the event of a violation of paragraphs 4.1-4.8 of this Agreement, the Company reserves the right to reconsider the terms of collaboration.",
                
            ]
        },
        {
            "title": "5. Prohibited Actions",
            "clauses": [
              "5.1. The Affiliate undertakes to act in their own name and shall not place Advertising Materials or distribute Advertising Materials on behalf of the administration, managers, or other employees of the Company and Affiliate Program.",
              "5.2. The Affiliate shall not address potential customers in any way which could lead to competition between the Affiliate and the Company in relation to the promotion of the website or websites.",
              "5.3. Advertising Materials may not be placed or distributed in the following formats:",
              "5.4. The Affiliate agrees not to offer or provide incentives (financial or otherwise) to any potential New User for registering, making deposits, or performing any action without the prior written agreement of the Company, excluding standard advertising programs that the Company may occasionally provide through the Affiliate Program.",
              "5.5. The Affiliate is prohibited from using their Referral Link to register their own customer account on the Company’s Resources, and also from conspiring with other interested parties.",
              "5.6. The Affiliate is prohibited from using cookie stuffing tactics, such as:",
              "5.7. The use of Fraudulent Traffic is strictly prohibited. Any actions by the Affiliate related to the attraction of Fraudulent Traffic will be considered a violation of the terms of this Agreement and will entail the consequences laid out in paragraph 7.4 of this Agreement."
            ]
          },
          {
            "title": "6. Confidential Information",
            "clauses": [
              "6.1. Throughout the validity period of this Agreement, the Affiliate may be entrusted with confidential information related to the Company's business, operations, technologies, and Affiliate Program (including, Commission and similar payments received by the Affiliate through the Affiliate Program).",
              "6.2. The Affiliate agrees not to disclose or distribute any confidential information to third parties without prior written agreement from the Company. The Affiliate shall use confidential information solely for the purposes of achieving the aims of this Agreement. The Affiliate's obligations in relation to confidential information shall remain in force even after the expiration of this Agreement.",
              "6.3. In the event of violation of clauses 6.1 or 6.2 of this Agreement, the Company has the right to terminate the Agreement with the Affiliate and apply penalties in accordance with the applicable laws governing the protection of confidential information."
            ]
          },
          {
            "title": "7. Commission",
            "clauses": [
              "7.1. The Affiliate’s Commission does not have a fixed value and depends on the income that the Company receives from New Users who have registered using the Affiliate’s Referral Link, as well as on the quality of traffic.",
              "7.2. From the moment of registration with the Affiliate Program, each new Affiliate receives commission worth 20 (twenty) percent of the net profit received by the Company from New Users brought in by the Affiliate in question over the course of 3 (three) calendar months, with the aim of increasing turnover. After 3 (three) calendar months from the date of registration for the Affiliate Program, the commission amount is 15 (fifteen) percent of the net profit the Company receives from New Users brought in by the Affiliate, unless the parties agree on a different Commission amount separately.",
              "7.3. If the Affiliate does not attract a minimum of 3 (three) New Users within 3 (three) consecutive calendar months, the Company has the right to change the terms of cooperation, reduce the Commission, suspend the Affiliate’s account in the Affiliate Program, or unilaterally terminate this Agreement with the Affiliate.",
              "7.4. The Company has the right, at its own discretion, to verify the Affiliate's activities for signs of Fraudulent Traffic. This verification period cannot exceed 90 days. During the verification period, Commission payouts to the Affiliate will be suspended. Detection of Fraudulent Traffic by the Affiliate is considered a violation of this Agreement and may lead to a revision of the terms of payment of the Commission, as well as to other consequences provided for in this Agreement. For the avoidance of doubt, any income earned as a result of Fraudulent Traffic will not be taken into account when calculating the Affiliate's Commission. The Company also reserves the right to deduct any amounts previously paid to the Affiliate that are associated with Fraudulent Traffic from future Commission payments."
            ]
          },
          {
            "title": "8. Commission Payouts",
            "clauses": [
              "8.1. Commission is paid out once a week, every Tuesday, and it covers the period from Monday to Sunday from the previous week, inclusive, provided the following conditions are met:\n- the Affiliate has previously agreed the Commission payment details with a Company Manager\n- the Commission exceeds the minimum Payout amount of $30.00 (thirty US dollars) and the Affiliate has attracted more than 4 New Users.\nThe Commission available for withdrawal is calculated based on events that are fully settled at the time of Payout. The Commission from unsettled events will be paid to the Affiliate once settlement is complete.\nIf the Payout conditions are not met, the Commission will automatically be carried over to the next period (including any negative balance).",
              "8.2. The Company has the right to withhold Payouts to the Affiliate in the event of unforeseen technical failures within the Affiliate Program, or should verification of the Affiliate and the Affiliate’s Resources be required in order to ensure compliance with the terms of this Agreement.",
              "8.3. The Company has the sole and exclusive right to calculate and make Payouts to the Affiliate in the same currency as the income received by the Company from New Users referred by the Affiliate."
            ]
          },
          {
            "title": "9. Liability of the Parties",
            "clauses": [
              "9.1. The Affiliate shall be fully and solely responsible for the operation and content of the Affiliate’s Resources. If the Affiliate violates the terms of this Agreement and applicable legislation, the Company has the right to unilaterally terminate the Agreement without paying out Commission, including any Commission calculated before the date the agreement is terminated.",
              "9.2. The Affiliate undertakes to reimburse the Company for any losses, including legal costs, arising as a result of third-party claims caused by the Affiliate's violation of the terms of this Agreement.",
              "9.3. The Company is not responsible for any indirect losses, including lost profits or loss of reputation, incurred by the Affiliate as a result of the termination of this Agreement or any other actions taken by the Company under the Affiliate Program. The Company is not answerable:\n– to third parties for the Affiliate's violation of the terms of the Agreement\n– for any loss of personal data by the Affiliate and/or transfer thereof to third parties\n– for any third-party claims related to the activities of the Affiliate's Resources and/or the placement of Advertising Materials",
              "9.4. The Company does not provide any express or implied guarantees with regard to the Affiliate Program, Advertising Materials, or the Company’s Resources, including but not limited to guarantees of fitness for a particular purpose, commercial quality, legality, or non-infringement of rights. The Company also does not guarantee the uninterrupted or error-free operation of the Company's Resources and, accordingly, is not responsible for any consequences caused by interruptions or errors in their operation.",
              "9.5. The Company does not provide any guarantees, assurances, or obligations with regard to the amount of Commission that the Affiliate may receive as a result of their participation in the Affiliate Program. The Commission amount depends on many factors, including but not limited to the activity levels of the New Users referred by the Affiliate, and the Affiliate's compliance with the terms of this Agreement.",
              "9.6. The maximum amount the Company can pay in the event of any suit, claim, or damages related to this Agreement is limited to the Commission amount paid to the Affiliate in the month prior to said claim."
            ]
          },
          {
            "title": "10. Dispute Resolution Policy",
            "clauses": [
              "10.1. Any disputes and disagreements in connection with this Agreement shall be resolved through negotiations. In the event of a dispute, the Affiliate may email a written complaint to the Affiliate Program Support Team using the email address provided on the Affiliate Program website, including a detailed description of the dispute.",
              "10.2. The Company has the right to refuse to consider the complaint if:\n- the Affiliate fails to provide proof of non-violation\n- the complaint contains profanity, calls for violence, or false accusations. Such actions by the Affiliate are considered a violation of this Agreement.",
              "10.3. The term for consideration of a complaint is 14 (fourteen) business days from the time it was received.",
              "10.4. The decision made by the Company is final and is not subject to review. The Company reserves the right not to consider a complaint.",
              "The terms of this Agreement shall be deemed accepted by the Affiliate from the moment they register for the Affiliate Program. The Affiliate undertakes to carefully read the terms of this Agreement before registering."
            ]
          }
         
    ];
    
    console.log(termsData);
    
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, []);
    
  return (
    
    <div className="bg-commonYellow">
      <h2 className="text-black text-3xl md:text-5xl lg:text-5xl uppercase text-center py-[4%] font-bold">
        Terms and Condition
      </h2>
      <p className="text-center py-[4%] md:py-0 lg:py-0 font-extrabold leading-tight uppercase">
        AFFILIATE AGREEMENT <br />
        (hereinafter the “AGREEMENT”) <br />
        General definitions
      </p>
      <p className="font-medium px-[10%] leading-loose">
        <strong>The Company</strong> is the individual or group of individuals
        who are the organizers of this Affiliate Program and are the owners of
        the rights to the Brand.
        <br />
        The MelBet brand.
        <br />
        <strong>The Company’s Resources</strong> are the Company’s websites and
        mobile applications whose purpose is to provide betting services.
        <br />
        <strong>The Company’s Products</strong> are the service or set of
        services offered to users on the Company’s Resources.
        <br />
        <strong>The Affiliate Program</strong> is a collaboration between the
        Company and Affiliates, under which the Affiliates advertises the
        Company’s Products on the Affiliates’ Resources in order to attract New
        Users to the Company’s Resources, for which the Affiliate receives a
        Commission.
        <br />
        <strong>An Affiliate</strong> is a webmaster (an individual or legal
        entity) that fulfills the terms and conditions of the Affiliate Program.
        <br />
        <strong>An Affiliate</strong> Account is a personal account belonging to
        an Affiliate in the Affiliate Program.
        <br />
        <strong>New Users</strong> are users who had not previously registered
        an account on the Company’s Resources, were attracted by an Affiliate
        under the Affiliate Program, and subsequently registered an account on
        the Company’s Resources and made their first deposit.
        <br />
        <strong>A Referral Link</strong> is a link to the Company’s Resources
        which contains an Affiliate’s unique identifier.
        <br />
        <strong>Commission</strong> is a monetary reward paid to the Affiliate
        as a previously agreed percentage of the profits generated for the
        Company by New Users brought in by the Affiliate.
        <br />
        <strong>Payout refers</strong> to the Commission transferred to the
        Affiliate from the Affiliate’s internal Affiliate Program account via an
        external payment system.
        <br />
        <strong>Advertising Materials</strong> refers to text, graphic, audio,
        video, and various other materials of an advertising nature, which serve
        to promote the Company’s Products.
        <br />
        <strong>Fraudulent Traffic</strong> refers to any activity engaged in by
        the Affiliate under the Affiliate Program with the aim of obtaining
        Commission via the use of illegal methods to generate traffic, as well
        as any actions that, in the opinion of the Company, are dishonest and/or
        aimed at deceiving the Company, regardless of whether real damage has
        been caused. Fraudulent Traffic includes but is not limited to:
        transactions using stolen credit or debit cards; chargebacks; colluding
        with related parties; manipulating the Affiliate Program, bonuses, or
        other reward mechanisms; creating false accounts in order to receive
        Commission; using someone else’s account; using unfair external factors
        or influences (such as deception), or unfair use of the Company’s
        services, including but not limited to exploiting loopholes in software;
        using a VPN or proxy servers to hide or change the location or
        identification data of the device used to access the Company’s
        Resources; and engaging in fraudulent or other criminal activities.
      </p>
      <h2 className="text-black text-3xl uppercase text-center py-[2%] font-bold">Terms and Conditions of the Agreement</h2>
      <div className="p-4">
      {termsData.map((section, index) => (
        <div key={index} className="mb-6 px-[10%]">
          <h2 className="font-bold text-2xl">{section.title}</h2>
          {section.clauses.map((clause, idx) => (
            <p key={idx} className="mt-2 font-medium">{clause}</p>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Terms;
