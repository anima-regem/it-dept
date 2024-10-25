"use client";

import React from 'react';

const Page = () => {
  // Placement data
  const placements = [
    { name: "Vishnu", regNo: "PKD19IT067", employer: "CodeRobo" },
    { name: "Dileep Krishnan M", regNo: "PKD19IT022", employer: "Tata Elxsi" },
    { name: "Unnikrishnan G", regNo: "PKD19IT054", employer: "EY-GDS, TCS, Speridian" },
    { name: "Irene Rose Johnson", regNo: "PKD19IT029", employer: "QBurst, L&T" },
    { name: "Sharanya T K", regNo: "PKD19IT047", employer: "SurveySparrow" },
    { name: "Shirin Shukkoor", regNo: "PKD19IT048", employer: "L&T, EY" },
    { name: "Hema K Shaji", regNo: "PKD19IT028", employer: "Tata Elxsi, Experion Technologies" },
    { name: "Abhimanyu P", regNo: "PKD19IT003", employer: "Acabes International Pvt Ltd, Speridian" },
    { name: "Jayageetha S", regNo: "PKD19IT030", employer: "Speridian" },
    { name: "Muhammad Thabsheer N P", regNo: "PKD19IT038", employer: "Alphastream.ai, Speridian" },
    { name: "Athira S", regNo: "PKD19IT017", employer: "Tata Elxsi, EY" },
    { name: "Deekshita D Nair", regNo: "PKD19IT019", employer: "Speridian" },
    { name: "Joel Jacob", regNo: "PKD19IT031", employer: "Speridian" },
    { name: "Anupama P ML", regNo: "PKD19IT065", employer: "CodeRobo" },
    { name: "Aswin S Kumar", regNo: "PKD19IT016", employer: "Innovature.ai" },
    { name: "Akhil C AL", regNo: "PKD19IT063", employer: "TCS, Cognizant, Qburst, Nference" },
    { name: "Parvathy Narippatta", regNo: "PKD19IT042", employer: "L&T, Cognizant" },
    { name: "R Ramkishore", regNo: "PKD19IT043", employer: "FEDERAL BANK, ACMEGRADE" },
    { name: "Midhundev P", regNo: "PKD19IT036", employer: "Wemakeiot, Cybrosys" },
    { name: "Madathil Aswin", regNo: "PKD19IT035", employer: "QBurst, 6D Technologies, EY-GDS, TATA ELXSI" },
    { name: "Ajithesh M V", regNo: "PKD19IT007", employer: "Qburst" },
    { name: "Ajeer Aslam KL", regNo: "PKD19IT062", employer: "CodeRobo" },
    { name: "Diya Juliet Xavier", regNo: "PKD19IT023", employer: "Planet Spark" },
    { name: "Faris Farsan M", regNo: "PKD19IT024", employer: "Alphastream.ai" },
    { name: "G John Baptist", regNo: "PKD19IT027", employer: "Speridian" },
    { name: "Vysakh P K", regNo: "PKD19IT060", employer: "Experion, Qburst" },
    { name: "Abhijith E V", regNo: "PKD19IT002", employer: "Qburst, Mitsogo" },
  ];

  // Company-wise placement summary
  const companyPlacements = [
    { company: "CodeRobo", count: 3 },
    { company: "Tata Elxsi", count: 4 },
    { company: "EY", count: 4 },
    { company: "TCS", count: 2 },
    { company: "Speridian", count: 6 },
    { company: "Qburst", count: 6 },
    { company: "L&T", count: 3 },
    { company: "SurveySparrow", count: 2 },
    { company: "Experion Technologies", count: 2 },
    { company: "Acabes International", count: 1 },
    { company: "Alphastream.ai", count: 2 },
    { company: "Innovature.ai", count: 1 },
    { company: "Federal Bank", count: 1 },
    { company: "ACMEGRADE", count: 1 },
    { company: "Cognizant", count: 2 },
    { company: "Nference", count: 1 },
    { company: "Wemakeiot", count: 1 },
    { company: "Cybrosys", count: 1 },
    { company: "6D Technologies", count: 1 },
    { company: "Planet Spark", count: 1 },
    { company: "Mitsogo", count: 1 },
  ];

  return (
    <div>
      <div className="px-7 py-28 lg:px-36">
        <h2 className="text-4xl lg:text-[40px] text-[#00385E]">
          Placement Details 2019-2023 Batch
        </h2>
        <div className="w-36 lg:w-44 h-1 bg-[#1B80C4] mt-2" />

        <div className="mt-12">
          <p className="text-black text-xl mb-8">
            The Department of Information Technology has achieved remarkable placement records for the 2019-2023 batch, with students securing positions in various prestigious companies.
          </p>

          {/* Company-wise Summary */}
          <div className="mb-12">
            <h3 className="text-2xl text-[#00385E] mb-4">Company-wise Placement Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {companyPlacements.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#1B80C4]">
                  <p className="text-lg font-semibold">{item.company}</p>
                  <p className="text-3xl text-[#00385E]">{item.count}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Student-wise Placement Details */}
          <h3 className="text-2xl text-[#00385E] mb-4">Student-wise Placement Details</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
              <thead>
                <tr className="bg-[#00385E] text-white">
                  <th className="p-4 text-left border">Sl.No</th>
                  <th className="p-4 text-left border">Student Name</th>
                  <th className="p-4 text-left border">Register No</th>
                  <th className="p-4 text-left border">Company</th>
                </tr>
              </thead>
              <tbody>
                {placements.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-4 border">{index + 1}</td>
                    <td className="p-4 border">{student.name}</td>
                    <td className="p-4 border">{student.regNo}</td>
                    <td className="p-4 border">{student.employer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;