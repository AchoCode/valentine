import React from "react";
import "../styles/Statistics.css";
import Image from "../../assets/2022.jpg";
import { NavBar } from "../utilities/NavBar";
export const StatisticsPg = () => {
  const stats = [
    { label: "Total Dates", value: 20, icon: "🍽️", grade: "D" },
    { label: "Sleepovers", value: 20, icon: "🎬", grade: "A" },
    { label: "Hugs Given", value: 5300, icon: "🤗", grade: "A" },
    { label: "Kisses Shared", value: 4200, icon: "💋", grade: "A" },
    { label: "Adventures Taken", value: 5, icon: "✈️", grade: "D" },
    { label: "Movies watched", value: 30, icon: "🎬", grade: "A" },
    { label: "Photos Taken Together", value: 30, icon: "📸", grade: "D" },
    {
      label: "Times We Said 'I Love You'",
      value: 9000,
      icon: "💖",
      grade: "A",
    },
    { label: "Anniversaries Celebrated", value: 2, icon: "🎉" },
    { label: "Arguments had", value: 5002, icon: "😆" },
    { label: "Arguments Won (Me)", value: 2, icon: "😆" },
    { label: "Arguments Won (You)", value: 5000, icon: "😆", grade: "A" },
  ];
  return (
    <div className="wrapper">
      <NavBar />
      <h3>STATISTICS</h3>
      <table>
        <thead>
          <tr>
            <th>Stats</th>
            <th>Qty</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat, index) => (
            <tr key={index}>
              <td>
                {stat.label} {stat.icon}
              </td>
              <td>{stat.value}</td>
              <td>{stat.grade || "f"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
