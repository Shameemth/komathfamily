OUR FAMILY TREE APP  (നമ്മുടെ കുടുംബവൃക്ഷം)
==========================================

WHAT IS IN THIS FOLDER
  index.html            the app
  family-data.js        ALL the family names. This is the file you edit.
  manifest.webmanifest, sw.js, icons/   needed for installing on phones

----------------------------------------------------------
PART 1 - PUT THE APP ON THE INTERNET (one time)
----------------------------------------------------------
1. Open app.netlify.com/drop in a browser.
2. Create a free Netlify account (or log in), so your link stays.
3. Drag this whole folder onto the page. After a minute you get a link.
4. Send the link to the family on WhatsApp.

Install on a phone like an app:
  Android (Chrome): open the link > menu (3 dots) > Install app
  iPhone (Safari):  open the link > Share button > Add to Home Screen

----------------------------------------------------------
PART 2 - ADD OR CHANGE PEOPLE (whenever you like)
----------------------------------------------------------
1. Open family-data.js in Notepad (or any text editor).
2. Add or change lines. Rules:
   - One person per line.
   - Children go under their parent, moved 2 spaces to the right.
     (Space bar twice for every generation.)
   - Name / English name  : both spellings can be searched.
   - Person & Wife        : spouse after " & " (spaces around &).
   - Person & First wife & Second wife   : more than one spouse is fine.
   - Person & engaged: Name              : shows as engaged.
   - A line starting with # is a note and is ignored.
   - Do not type the ` character or ${ in a name.
3. Example (names are made up):

     Rahman Kutty / Rahman Kutty & Fathima / Fathima
       Anwar & Shifa
         Zayan
         Lamiya
       Safiya & Nazar
         Hadiya

   Here Anwar and Safiya are children of Rahman Kutty and Fathima.
   Zayan and Lamiya are children of Anwar and Shifa.
   Hadiya is the child of Safiya and Nazar.

4. Save the file. Upload the folder again:
   Netlify > your site > Deploys > drag the folder in. The link stays the same.
5. Open the app. Tap Generations, then "Data check" at the bottom.
   It shows the line number of any mistake.

Tip: where a person is both a blood relative in one place and a husband/wife in
another (like Thoduvayil Ammad in the sample data), write #name after the person
where he or she is listed as a child, and write "& #name" on the spouse's line.
Look at how "#ammad" is used in family-data.js.

----------------------------------------------------------
MANGLISH
----------------------------------------------------------
- Ellaa perukalum family-data.js ennu file-il aanu. Aa file maathram maattiyaal mathi.
- Oru vyakthi oru line. Makkal achante/ammayude thaazhe 2 space ullilekku.
- "&" kazhinju bharya/bhartha-vinte peru.
- Maatti kazhinjaal folder veendum Netlify-il Deploys-il idukka. Link maarilla.
- App thurannu Generations > Data check nokkiyaal thettukal kaanikkum.

----------------------------------------------------------
LINKING TWO FAMILIES (married cousins)
----------------------------------------------------------
When a husband and wife are BOTH in the tree (for example
Pokarkka and Mariyam), write #name after one of them and
"& #name" on the other. Their children then show under both
parents automatically. See #pokarkka, #hafra, #asna, #shahida
in family-data.js.

