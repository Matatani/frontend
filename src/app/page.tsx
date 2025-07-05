import React from 'react';
import Header from '@/app/_components/Header';
import UploadBar from '@/app/_components/UploadBar';
import DiagnosticCard from '@/app/_components/DiagnosticCard';
import TreatmentCard from '@/app/_components/TreatmentCard';
import diagnosticData from '@/app/_data/DiseaseData'; // Import the data

const Home: React.FC = () => {
    return (
        <main className="flex items-center justify-center min-h-screen p-4 bg-[#F7F6F1]">
            <div className="w-full max-w-4xl p-8 bg-white shadow-xl rounded-3xl">
                <Header title="Matatani" />

                <section className="flex flex-col gap-6">
                    <h1 className="text-2xl font-medium text-gray-800">Put your sick leaf here</h1>
                    <UploadBar fileName="IMG_001.jpg" />

                    <div className="relative min-h-[350px] rounded-2xl overflow-hidden p-6 flex items-center">
                        <div
                            className="absolute inset-0 bg-center bg-cover"
                            style={{ backgroundImage: "url('https://images.pexels.com/photos/32326134/pexels-photo-32326134.jpeg')" }}
                        ></div>

                        <div className="relative z-10 grid w-full gap-6 md:grid-cols-2">
                            <DiagnosticCard
                                title={diagnosticData.title}
                                symptoms={diagnosticData.symptoms}
                                cause={diagnosticData.cause}
                            />
                            <TreatmentCard
                                title={diagnosticData.treatmentTitle}
                                description={diagnosticData.treatmentDescription}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;

{/*<div className="inline-block px-4 py-2 mt-2 text-sm font-semibold bg-white/30 rounded-full self-start">*/}
{/*  #E9C46A*/}
{/*</div>*/}