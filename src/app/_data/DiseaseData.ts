export type DiseaseData = {
    title: string;
    symptoms: string;
    cause: string;
    treatmentTitle: string;
    treatmentDescription: string;
};

const diagnosticData: DiseaseData = {
    title: "Bacterial Blight",
    symptoms: "Yellowing leaves, water-soaked streaks, and brown lesions that spread rapidly. Severe cases cause wilting and early plant death.",
    cause: "Caused by Pseudomonas and Xanthomonas bacteria, spread through rain splash, contaminated seeds, and tools.",
    treatmentTitle: "Treatment",
    treatmentDescription: "Apply copper-based bactericides and ensure proper irrigation to reduce moisture. Use resistant crop varieties when available. Rotate crops and remove infected plant debris to prevent spread."
};

export default diagnosticData;