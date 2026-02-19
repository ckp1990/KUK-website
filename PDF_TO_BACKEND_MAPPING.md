# PDF to Backend Mapping

This document maps the content extracted from **BIODATA full_Ullas Karanth_16-2-2026.pdf** (Full Bio) and **Bio-Brief-Ullas Karanth_16-2-2026.pdf** (Brief Bio) to the Firebase schema defined in `FIREBASE_SCHEMA.md`.

## 1. Cloud Firestore Database Structure

### A. Collection: `pages`

#### Document: `home`
*   **about_snippet_title**: "About Dr. K. Ullas Karanth"
*   **about_snippet_text** (from Brief Bio):
    > "Kota Ullas Karanth was originally trained as a mechanical engineer at the National Institute of Technology, Surathkal (1971), but changed careers pursue his deep passion for wildlife biology, obtaining an MS degree from the University of Florida, USA (1988) and a PhD from Mangalore University, India (1993)."

#### Document: `about`
*   **full_bio** (structured from Full Bio):
    *   **Personal Information**:
        *   Born: September 21, 1948, in Puttur, Karnataka, India.
        *   Wife: Prathibha Karanth, Ph.D.
        *   Daughter: Krithi K. Karanth, Ph.D.
        *   Languages: English, Kannada, Hindi, Tulu (Read/Write/Speak); Tamil, Telugu, Kodava, Konkani (Comprehension).
    *   **Educational Background**:
        *   Ph.D. in Applied Zoology, Mangalore University (1993).
        *   M.S. in Forest Resources and Conservation, University of Florida (1988).
        *   B.E. in Mechanical Engineering, KREC/NIT Surathkal (1971).
    *   **Professional Positions**:
        *   Emeritus Director, Centre for Wildlife Studies (1984–present).
        *   Director for Science-Asia & India Program, Wildlife Conservation Society (2012–2017).
        *   Director, India Program, Wildlife Conservation Society (1988–2010).

*   **awards** (array of objects):
    *   `{ title: "Distinguished Alumnus Award, The University of Florida", year: 2021 }`
    *   `{ title: "The George Schaller Award, Wildlife Conservation Society", year: 2018 }`
    *   `{ title: "Distinguished Alumnus Award, St. Aloysius College", year: 2018 }`
    *   `{ title: "Thrive Award, Seattle Zoological Society (Jointly with Krithi Karanth)", year: 2018 }`
    *   `{ title: "Padma Shri, National Civilian Honor Conferred by the President of India", year: 2012 }`
    *   `{ title: "Rajyprashasthi State Award, Government of Karnataka", year: 2011 }`
    *   `{ title: "Distinguished Alumnus, National Institute of Technology, Surathkal", year: 2010 }`
    *   `{ title: "Salim Ali National Award for lifetime achievement, Bombay Natural History Society", year: 2009 }`
    *   `{ title: "Fellow of the Indian Academy of Sciences", year: 2008 }`
    *   `{ title: "J. Paul Getty Award for Global Conservation Leadership, WWF-USA", year: 2007 }`
    *   `{ title: "Earthcare International Award, Sierra Club, USA", year: 2006 }`

---

### B. Collection: `institutions`
*(Derived from Professional Affiliations)*

*   `{ name: "Centre for Wildlife Studies", role: "Emeritus Director", order: 1 }`
*   `{ name: "Wildlife Conservation Society", role: "Former Director", order: 2 }`
*   `{ name: "Indian Academy of Sciences", role: "Fellow", order: 3 }`
*   `{ name: "University of Florida", role: "Adjunct Professor", order: 4 }`
*   `{ name: "University of Minnesota", role: "Adjunct Professor", order: 5 }`
*   `{ name: "Tata Institute of Fundamental Research (NCBS)", role: "Adjunct Professor (2004-2020)", order: 6 }`
*   `{ name: "Kasetsart University, Bangkok", role: "Adjunct Professor (2023-present)", order: 7 }`
*   `{ name: "Manipal Academy of Higher Education (MAHE)", role: "Recognized Doctoral Guide", order: 8 }`
*   `{ name: "National Institute of Advanced Studies (NIAS)", role: "Associate", order: 9 }`
*   `{ name: "Bombay Natural History Society", role: "Life Member", order: 10 }`

---

### C. Collection: `publications`

#### Type: `book` (Popular Books in English)
*   `{ title: "Among Tigers: Fighting to Bring Back Asia’s Big Cats", year: 2022, publisher: "Chicago Review Press", language: "English" }`
*   `{ title: "Growing up Karanth (co-authored with Malavika Kapur and Kshama Rao)", year: 2021, publisher: "West Land Publications", language: "English" }`
*   `{ title: "A View from the Machan", year: 2006, publisher: "Permanent Black", language: "English" }`
*   `{ title: "Tiger Tales (Edited Anthology)", year: 2006, publisher: "Penguin Press", language: "English" }`
*   `{ title: "The Way of the Tiger", year: 2001, publisher: "Voyageur Press / Colin Baxter / Universities Press", language: "English" }`

#### Type: `book` (Popular Books in Kannada)
*   `{ title: "Karanthara Suliyalli (Translation of Growing up Karanth)", year: 2016, language: "Kannada" }`
*   `{ title: "Hulirayana Akashavaani (A Tiger’s Broadcast)", year: 2007, language: "Kannada" }`
*   `{ title: "Huliya Baduku (Life of the Tiger)", year: 2005, language: "Kannada" }`
*   `{ title: "Kaadu Pranigala Jadinalli (Tracking Wild Animals)", year: 2000, language: "Kannada" }`
*   `{ title: "Aranya Matthu Samaja (Forests and Society)", year: 1983, language: "Kannada" }`

#### Type: `book` (Scientific Books and Monographs)
*   `{ title: "Spatial Dynamics and Ecology of Large Ungulate Populations in Tropical Forests of India", year: 2021, publisher: "Springer-Nature", language: "English" }`
*   `{ title: "Methods for Monitoring Tiger and Prey Populations (Co-edited)", year: 2017, publisher: "Springer-Nature", language: "English" }`
*   `{ title: "Science and Conservation of Animal Populations", year: 2017, publisher: "Natraj Publishers", language: "English" }`
*   `{ title: "Recovering Biodiversity in Indian Forests", year: 2016, publisher: "Springer Nature", language: "English" }`
*   `{ title: "Camera traps in Animal Ecology (Co-edited)", year: 2011, publisher: "Springer Nature", language: "English" }`
*   `{ title: "Science of Saving Tigers", year: 2010, publisher: "Orient Blackswan", language: "English" }`
*   `{ title: "Monitoring Tigers and their Prey (Co-edited)", year: 2002, publisher: "Centre for Wildlife Studies", language: "English" }`

#### Type: `scientific_article`
*(Representative sample from 100+ listed articles)*

*   `{ title: "Tigers Against the Odds: Applying Macro-Ecology to Species Recovery in India", year: 2020, journal: "Biological Conservation", authors: ["Karanth K.U.", "Kumar N.S.", "Karanth, K.K."] }`
*   `{ title: "Navigating paved paradise: Evaluating landscape permeability to movement for large mammals in two conservation priority landscapes in India", year: 2020, journal: "Biological Conservation", authors: ["Jayadevan, A.", "Nayak, R.", "Karanth, K. K.", "Krishnaswamy, J.", "DeFries, R.", "Karanth, K.U.", "Vaidyanathan, S."] }`
*   `{ title: "Summary and highlights of small carnivore photo-captures during a field season in the central Western Ghats, India", year: 2020, journal: "Small Carnivore Conservation", authors: ["Jathanna, D.", "Kumar, S., N.", "Karanth, K., U."] }`
*   `{ title: "Tigers and leopards coexist despite similarities in space use and habitat selection", year: 2020, journal: "Cat News", authors: ["Kumar, A.V.", "Karanth, K.U.", "Jathanna, D."] }`
*   `{ title: "Bits and pieces: Forest Fragmentation by Linear Intrusions in India", year: 2020, journal: "Land Use Policy", authors: ["Nayak, R.", "Karanth, K. K.", "Dutta, T.", "De Fries, R.", "Karanth, K.U.", "Vaidyanathan, S."] }`
*   `{ title: "The impact of leopards (Panthera pardus) on livestock losses and human injuries in a human-use landscape in Maharashtra, India", year: 2020, journal: "PeerJ", authors: ["Athreya, V.", "Isvaran, K.", "Odden, M.", "Linnell, J. D.", "Kshettry, A.", "Krishnaswamy, J.", "Karanth, K.U."] }`
*   `{ title: "How sampling-based overdispersion reveals India’s tiger monitoring orthodoxy", year: 2019, journal: "Conservation Science and Practice", authors: ["Gopalaswamy M. A.", "Karanth K. U.", "Delampady M.", "Stenseth C. N."] }`
*   `{ title: "A spatially explicit capture-recapture model for partially identified individuals when trap detection rate is less than one", year: 2019, journal: "Calcutta Statistical Association (Bulletin)", authors: ["Dey, S.", "Delampady, M.", "Karanth, K.U.", "Gopalaswamy, A.M."] }`

---

### D. Collection: `media_items`
*(Placeholders based on "Coverage of Professional Work in the Media" section)*

*   `{ title: "BBC Documentary", type: "video", description: "Television documentary broadcast on BBC." }`
*   `{ title: "CNN Feature", type: "video", description: "Television documentary broadcast on CNN." }`
*   `{ title: "PBS Feature", type: "video", description: "Television documentary broadcast on PBS." }`
*   `{ title: "National Geographic Feature", type: "video", description: "Television documentary broadcast on National Geographic." }`
*   `{ title: "New York Times Article", type: "photo", description: "Print media coverage in New York Times." }`
*   `{ title: "Time Magazine Feature", type: "photo", description: "Print media coverage in Time Magazine." }`
*   `{ title: "Scientific American Article", type: "photo", description: "Print media coverage in Scientific American." }`

---

## 2. Note on Missing Data
The following sections in the PDF were empty and require manual content addition later:
*   **Popular Articles in English**: Listed as a heading but no articles were found.
*   **Popular Articles in Kannada**: Listed as a heading but no articles were found.
