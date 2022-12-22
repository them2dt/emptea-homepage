import React from "react";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Tooltip as Tip } from "@mui/material";
import { motion } from "framer-motion";
import { Data } from "../../utils/Data";
import { useRef } from "react";
import { useInView } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function ChartPanel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [nakamoto] = useState({
    labels: Data.map((data) => data.chain),
    datasets: [
      {
        label: "Nakamoto-coefficient",
        data: Data.map((data) => data.nakamotoCoefficient),
        backgroundColor: [
          "rgba(20, 241, 149, 0.5)",
          "rgba(130, 71, 229, 0.5)",
          "rgba(96, 101, 140, 0.5)",
        ],
        borderColor: [
          "rgb(20, 241, 149)",
          "rgb(130, 71, 229)",
          "rgb(96, 101, 140)",
        ],
        borderWidth: 2,
      },
    ],
  });
  const [tps] = useState({
    labels: Data.map((data) => data.chain),
    datasets: [
      {
        label: "TPS",
        data: Data.map((data) => data.tps),
        backgroundColor: [
          "rgba(20, 241, 149, 0.5)",
          "rgba(130, 71, 229, 0.5)",
          "rgba(96, 101, 140, 0.5)",
        ],
        borderColor: [
          "rgb(20, 241, 149)",
          "rgb(130, 71, 229)",
          "rgb(96, 101, 140)",
        ],
        borderWidth: 2,
      },
    ],
  });
  const [costs] = useState({
    labels: Data.map((data) => data.chain),
    datasets: [
      {
        label: "Cost in USD:",
        data: Data.map((data) => data.cost),
        backgroundColor: [
          "rgba(20, 241, 149, 0.5)",
          "rgba(130, 71, 229, 0.5)",
          "rgba(96, 101, 140, 0.5)",
        ],
        borderColor: [
          "rgb(20, 241, 149)",
          "rgb(130, 71, 229)",
          "rgb(96, 101, 140)",
        ],
        borderWidth: 2,
      },
    ],
  });

  return (
    <motion.div className="chart-panel" ref={ref}>
      <motion.div className="chart-panel-content">
        {isInView && (
          <motion.div
            className="chart-panel-content-title"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4,
                duration: 0.8,
                damping: 25,
                stiffness: 500,
              },
            }}
          >
            <h2>Emptea builds on Solana.</h2>
          </motion.div>
        )}
        <motion.div className="chart-panel-content-charts">
          <motion.div className="chart-row">
            {isInView && (
              <motion.div
                className="chart"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    duration: 0.8,
                    damping: 25,
                    stiffness: 500,
                  },
                }}
              >
                <motion.div className="chart-title">
                  <Tip title="Amount of validators needed to slow down the blockchain.">
                    <p>Nakamoto-coefficient</p>
                  </Tip>
                </motion.div>
                <Bar
                  data={nakamoto}
                  options={{
                    plugins: {
                      title: {
                        display: false,
                      },
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </motion.div>
            )}
            {isInView && (
              <motion.div
                className="chart"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 0.8,
                    duration: 0.8,
                    damping: 25,
                    stiffness: 500,
                  },
                }}
              >
                <motion.div className="chart-title">
                  <Tip title="Transactions per second.">
                    <p>Transactions per second</p>
                  </Tip>
                </motion.div>
                <Bar
                  data={tps}
                  options={{
                    plugins: {
                      title: {
                        display: false,
                      },
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </motion.div>
            )}
            {isInView && (
              <motion.div
                className="chart"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: 0.8,
                    damping: 25,
                    stiffness: 500,
                  },
                }}
              >
                <motion.div className="chart-title">
                  <Tip title="How much you need to pay to execute a transaction.">
                    <p>Cost per transaction (USD)</p>
                  </Tip>
                </motion.div>
                <Bar
                  data={costs}
                  options={{
                    plugins: {
                      title: {
                        display: false,
                      },
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ChartPanel;
