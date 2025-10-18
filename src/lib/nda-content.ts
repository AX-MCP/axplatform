
export type NdaSection = {
  title: string;
  content: string[];
};

export const ndaContent: NdaSection[] = [
  {
    title: "1. Definition of Confidential Information",
    content: [
      'For purposes of this Agreement, "Confidential Information" shall include all information or material that has or could have commercial value or other utility in the business in which Disclosing Party is engaged. If Confidential Information is in written form, the Disclosing Party shall label or stamp the materials with the word "Confidential" or some similar warning. If Confidential Information is transmitted orally, the Disclosing Party shall promptly provide a writing indicating that such oral communication constituted Confidential Information.',
    ],
  },
  {
    title: "2. Exclusions from Confidential Information",
    content: [
      "Receiving Party's obligations under this Agreement do not extend to information that is: (a) publicly known at the time of disclosure or subsequently becomes publicly known through no fault of the Receiving Party; (b) discovered or created by the Receiving Party before disclosure by Disclosing Party; (c) learned by the Receiving Party through legitimate means other than from the Disclosing Party or Disclosing Party's representatives; or (d) is disclosed by Receiving Party with Disclosing Party's prior written approval.",
    ],
  },
  {
    title: "3. Obligations of Receiving Party",
    content: [
      "Receiving Party shall hold and maintain the Confidential Information in strictest confidence for the sole and exclusive benefit of the Disclosing Party. Receiving Party shall carefully restrict access to Confidential Information to employees, contractors, and third parties as is reasonably required and shall require those persons to sign nondisclosure restrictions at least as protective as those in this Agreement.",
      "Receiving Party shall not, without prior written approval of Disclosing Party, use for Receiving Party's own benefit, publish, copy, or otherwise disclose to others, or permit the use by others for their benefit or to the detriment of Disclosing Party, any Confidential Information.",
    ],
  },
  {
    title: "4. Term",
    content: [
      "The nondisclosure provisions of this Agreement shall survive the termination of this Agreement and Receiving Party's duty to hold Confidential Information in confidence shall remain in effect until the Confidential Information no longer qualifies as a trade secret or until Disclosing Party sends Receiving Party written notice releasing Receiving Party from this Agreement, whichever occurs first.",
    ],
  },
  {
    title: "5. No License",
    content: [
      "Nothing contained herein shall be construed as granting or conferring any rights by license or otherwise in the Confidential Information. It is understood and agreed that neither party solicits any change in the organization, business practice, service, or products of the other party, and that the disclosure of Confidential Information shall not be construed as evidencing any intent by a party to purchase any products or services of the other party nor as an encouragement to expend funds in development or research efforts.",
    ],
  },
  {
    title: "6. Governing Law",
    content: [
      "This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware without regard to its conflict of laws rules.",
    ],
  },
  {
    title: "7. Entire Agreement",
    content: [
      "This Agreement and each party's obligations shall be binding on the representatives, assigns, and successors of such party. Each party has signed this Agreement through its authorized representative.",
    ],
  },
];
