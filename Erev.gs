function eRev(){
//---------------whole-cell
  //Szabadics 2009 Functional specificity of mossy fiber innervation of GABAergic cells in the hippocampus.
  new solution(celsius=36,
               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
               iSolution='90 K-Gluconate, 43.5 KCl, 1.8 NaCl, 1.7 MgCl2, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-Phosphocreatine',
               recordingMethod='whole-cell',
               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
               pH={e:NaN,i:7.2,CO2:false}).log();
  //Armstrong 2011 Neurogliaform cells in the molecular layer of the dentate gyrus as feed-forward γ-aminobutyric acidergic modulators of entorhinal-hippocampal interplay.
//  new solution(celsius=22,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               iSolution='40 CsCl, 90 K-Gluconate, 1.8 NaCl, 1.7 MgCl2, 3.5 KCl, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();
//  new solution(celsius=22,
//               eSolution='126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4',
//               iSolution='90 K-Gluconate, 1.8 NaCl, 1.7 MgCl2, 27.4 KCl, 0.05 EGTA, 10 HEPES, 2 MgATP, 0.4 Na2GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-50,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.25,CO2:true}).log();  
  //Markwardt 2011 Ivy/neurogliaform interneurons coordinate activity in the neurogenic niche.
//  new solution(celsius=22,
//               eSolution='125 NaCl, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2, 25 NaHCO3',
//               iSolution='190 K-Gluconate, 45 KCl, 4 MgCl2, 10 HEPES, 4 MgATP, 0.3 NaGTP, 7 Na2-Phosphocreatine, 0.1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:false}).log();
  //Jinde 2012 Hilar mossy cell degeneration causes transient dentate granule cell hyperexcitability and impaired pattern separation.
//  new solution(celsius=33,
//               eSolution='124 NaCl, 4.5 KCl, 26 NaHCO3, 1.2 NaH2PO4, 1 MgCl2, 2 CaCl2',
//               iSolution='125 Cs-Methanesulfonate, 4 Mg2ATP, 4 NaCl, 0.3 Na2GTP, 16 KHCO3, 5 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-67,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:3}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Kraushaar 2000 Efficacy and stability of quantal GABA release at a hippocampal interneuron-principal neuron synapse.
//    new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 0.5 CaCl2, 2.5 MgCl2',
//               iSolution='145 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:4.2,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               iSolution='145 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:4.2,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
//  new solution(celsius=34,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               iSolution='140 K-Methylsulfate, 2 KCl, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-71.4,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:NaN}).log();
  //Larimer 2010 Representing information in cell assemblies: persistent activity mediated by semilunar granule cells.
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               iSolution='140 K-Methylsulfate, 4 NaCl, 10 HEPES, 0.2 EGTA, 4 MgATP, 0.3 Na3GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:-74,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               iSolution='140 Cs-Methylsulfate, 4 NaCl, 10 HEPES, 1 EGTA, 25 TEA-OH, 5 QX314-Br, 4 MgATP, 0.3 Na3GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:55,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.3,i:7.3,CO2:true}).log();
  //Larimer 2008 Nonrandom local circuits in the dentate gyrus.
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               iSolution='140 K-Methylsulfate, 4 NaCl, 10 HEPES, 0.2 EGTA, 4 MgATP, 0.3 Na3GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:-76.7,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //Bartos 2002 Fast synaptic inhibition promotes synchronized gamma oscillations in hippocampal interneuron networks.
//  new solution(celsius=33.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               iSolution='110 K-Gluconate, 40 KCl, 0.1 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:NaN,EPSC:17.019,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //Sambandan 2010 Associative plasticity at excitatory synapses facilitates recruitment of fast-spiking interneurons in the dentate gyrus.
//  new solution(celsius=30,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               iSolution='120 K-Gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 0.5 Na2GTP, 10 HEPES, 7 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:NaN,EPSC:17.019,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.2,CO2:true}).log();
  //Williams 2007 Semilunar granule cells: glutamatergic neurons in the rat dentate gyrus with axon collaterals in the inner molecular layer.
//  new solution(celsius=30,
//               eSolution='124 NaCl, 3 KCl, 1.23 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2.5 CaCl2',
//               iSolution='140 K-Methylsulfate, 4 NaCl, 10 HEPES, 0.2 EGTA, 4 MgATP, 0.3 Na3GTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:-50,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //Savanthrapadian 2014 Synaptic properties of SOM- and CCK-expressing cells in dentate gyrus interneuron networks.
//  new solution(celsius=31.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               iSolution='140 K-Gluconate, 4 KCl, 5 HEPES, 2 MgCl2, 4 Na2ATP, 0.1 EGTA, 0.5 NaGTP, 7 Na-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:-70}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//  new solution(celsius=31.5,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               iSolution='110 K-Gluconate, 40 KCl, 10 HEPES, 2 MgCl2, 2 Na2ATP, 0.1 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //Dasgupta 2015 Calcium permeable AMPA receptor-dependent long lasting plasticity of intrinsic excitability in fast spiking interneurons of the dentate gyrus decreases inhibition in the granule cell layer.
//  new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 1 MgCl2, 2 CaCl, 26 NaHCO3, 1.25 NaH2PO4',
//               iSolution='135 K-Gluconate, 7 KCl, 10 HEPES, 10 Na2-Phosphocreatine, 5 MgATP, 0.5 Na2GTP, 0.2 EGTA',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-65}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
//    new solution(celsius=33,
//               eSolution='125 NaCl, 2.5 KCl, 1 MgCl2, 2 CaCl, 26 NaHCO3, 1.25 NaH2PO4',
//               iSolution='137 Cs-Gluconate, 7 CsCl, 0.2 EGTA, 10 HEPES, 3 QX222-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:-20}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:7.4,i:7.3,CO2:true}).log();
  //Hsu 2016 Differential Recruitment of Dentate Gyrus Interneuron Types by Commissural Versus Perforant Pathways.
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               iSolution='121.5 CsMethanesulfonate, 0.1 EGTA, 4 MgCl2, 13.5 CsCl, 10 HEPES, 5 QX314-Br, 2 Na2ATP, 10 Na2-phosphocreatine, 0.3 Na3GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:10,Vss:NaN}, Erev:{IPSC:-25,EPSC:10,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=23,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               iSolution='136.8 K-Gluconate, 7.2 KCl, 0.2 EGTA, 4 MgATP, 10 HEPES, 7 Na2-Phosphocreatine, 0.5 Na3GTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:-75,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Harney 2002 Pre- and postsynaptic properties of somatic and dendritic inhibition in dentate gyrus.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 11 MgCl2',
//               iSolution='140 KCl, 10 EGTA,10 HEPES, 20 Na2-Phosphocreatine, 2 Mg2ATP, 0.3 NaGTP',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-60,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Hefft 2005 Asynchronous GABA release generates long-lasting inhibition at a hippocampal interneuron-principal neuron synapse.
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2',
//               iSolution='110 KCl, 35 K-Gluconate, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES, 0.75 QX314-Cl',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //Liu 2014 Rapid dynamic changes of dendritic inhibition in the dentate gyrus by presynaptic activity patterns.
//    new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               iSolution='15 K-Gluconate, 140 KCl, 0.1 EGTA, 2 MgCl2, 4 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
//  new solution(celsius=32,
//               eSolution='125 NaCl, 25 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 2 CaCl2, 1 MgCl2',
//               iSolution='135 K-Gluconate, 20 KCl, 0.1 EGTA, 2 MgCl2 4 Na2ATP, 10 HEPES',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-80,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Price 2005 Neurogliaform neurons form a novel inhibitory network in the hippocampal CA1 area.
//  solution(celsius=32,
//           eSolution='130 NaCl, 3.5 KCl, 2.5 CaCl2, 1.5 MgSO4, 1.25 NaH2PO4, 24 NaHCO3, 3 KYNA',
//           iSolution='126 K-Gluconate, 10 HEPES, 10 Na2-Phosphocreatine, 4 KCl, 4 MgATP, 0.3 NaGTP',
//           recordingMethod='whole-cell',
//           voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:-70,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//           pH={e:NaN,i:7.3,CO2:true}).log();
  //Yu 2015 Dentate total molecular layer interneurons mediate cannabinoid-sensitive inhibition.
//  new solution(celsius=22,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4, 26 NaHCO3',
//               iSolution='125 KCl, 10 K-Gluconate, 10 HEPES, 2 MgCl2, 0.2 EGTA, 2 NaATP, 0.5 NaGTP, 10 Na2-Phosphocreatine',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:-70,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  
  //Yu 2013 Status epilepticus enhances tonic GABA currents and depolarizes GABA reversal potential in dentate fast-spiking basket cells.
//  new solution(celsius=33,
//               eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4, 26 NaHCO3',
//               iSolution='125 KCl, 10 K-Gluconate, 10 HEPES, 2 MgCl2, 0.2 EGTA, 2 NaATP, 0.5 NaGTP, 10 Na2-Phosphocreatine.',
//               recordingMethod='whole-cell',
//               voltages={Vm:{RMP:NaN,Vh:-70,Vss:NaN}, Erev:{IPSC:-70,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:7.3,CO2:true}).log();
  //Chamberland 2010 Synapse-specific inhibitory control of hippocampal feedback inhibitory circuit.
  //Whole cell: Experimental Erev from Soma IPSCs=-71.9±1.2 EPSC=10;
//  exp1= new solution(celsius=32,
//                     eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 2 MgSO4, 2 CaCl2',
//                     iSolution='130 KMeSO3, 2 MgCl2, 10 Na2-Phosphocreatine, 10 HEPES, 2 TrisATP, 0.2 TrisGTP',
//                     recordingMethod='whole-cell',
//                     voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-71.9,EPSC:10,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//                     pH={e:7.4,i:7.3,CO2:true}).log();
  //Jarolimek 1999 A furosemide-sensitive K+-Cl- cotransporter counteracts intracellular Cl- accumulation and depletion in cultured rat midbrain neurons
  //[K]o= 2 [A-]pip= 4.5: Experimental Erev in Dendrites=−97.7 ± 1.8 in Soma=−83.4 ± 0.9
//  exp4 = new solution(celsius=22,
//                      eSolution='156 NaCl, 2 KCl, 1 CsCl, 2 CaCl2, 1 MgCl2',
//                      iSolution='140 K-Glucuronate, 0.25 CaCl2, 2 Mg-ATP, 4 QX314-Br',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-83.4,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:17.5,correctedAlready:true}},
//                      pH={e:7.3,i:7.3,CO2:false}).log();
  //[K]o=10 [A-]pip= 4.5: Experimental Erev in Dendrites=−72.5 ± 2.1 in Soma=−73.7 ± 0.9
//  exp5 = new solution(celsius=22,
//                      eSolution='148 NaCl,10 KCl, 5 CsCl, 2 CaCl2, 1 MgCl2',
//                      iSolution='140 K-Glucuronate, 0.25 CaCl2,  0 MgCl2, 2 Mg-ATP, 4 QX314-Br',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-73.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:15.8,correctedAlready:true}},
//                      pH={e:7.3,i:7.3,CO2:false}).log();
  //[K]o=10 [A-]pip=15  : Experimental Erev in Dendrites=−63.0 ± 0.9 in Soma=−56.5 ± 0.3
//  exp6 = new solution(celsius=22,
//                      eSolution='148 NaCl,10 KCl, 5 CsCl, 2 CaCl2, 1 MgCl2',
//                      iSolution='130 K-Glucuronate, 0.25 CaCl2,0.5 MgCl2, 2 Mg-ATP, 5 QX314-Br, 3.5 NaCl, 5 KCl',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-73.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:15.8,correctedAlready:true}},
//                      pH={e:7.3,i:7.3,CO2:false}).log();
  //[K]o= 2 [A-]pip=15  : Experimental Erev in Dendrites=−75.7 ± 1.8 in Soma=−59.8 ± 1.1
//  exp7 = new solution(celsius=22,
//                      eSolution='156 NaCl, 2 KCl, 1 CsCl, 2 CaCl2, 1 MgCl2',
//                      iSolution='130 K-Glucuronate, 0.25 CaCl2,0.5 MgCl2, 2 Mg-ATP, 5 QX314-Br, 3.5 NaCl, 5 KCl',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-59.8 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:17.5,correctedAlready:true}},
//                      pH={e:7.3,i:7.3,CO2:false}).log();
  //Otis 1992 Modulation of decay kinetics and frequency of GABAA receptor-mediated spontaneous inhibitory postsynaptic currents in hippocampal neurons.
  //Experimental Erev in Soma=-2.7±0.4, GHK=1.5
//  exp8 = new solution(celsius=34,
//                      eSolution='126 NaCl, 2.5 KCl, 2 CaCl2, 2 MgCl2, 26 NaHCO3, 1.25 NaH2PO4',
//                      iSolution='140 CsCl, 10 HEPES, 2 MgCl2',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-2.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//                      pH={e:7.35,i:7.2,CO2:true}).log();
  //Bertrand 2001 Unitary synaptic currents between lacunosum-moleculare interneurones and pyramidal cells in rat hippocampus.
  //Experimental Erev in Soma=-73.7, without Gluconate GHK=-69.65, with Gluconate GHK=-55.02
//  exp9 = new solution(celsius=22,
//                      eSolution='124 NaCl, 2.5 KCl, 1.25 NaH2PO4, 26 NaHCO3, 4 MgSO4, 4 CaCl2',
//                      iSolution='140 K-Gluconate, 5 NaCl, 0.5 EGTA, 2 MgCl2, 0.5 Hepes, 10 Phosphocreatine, 2 ATP-Tris, 0.4 TrisGTP',
//                      recordingMethod='whole-cell',
//                      voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-73.7 ,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//                      pH={e:7.4,i:7.3,CO2:true}).log();
  //Glickfeld 2006 Distinct timing in the activity of cannabinoid-sensitive and cannabinoid-insensitive basket cells.
  //exp19 = new solution(34,'119 NaCl, 2.5 KCl, 1.3 NaH2PO4, 1.3 MgCl2, 2.5 CaCl2, 26 NaHCO3','150 K-Gluconate, 1.5 MgCl2, 5 HEPES buffer, 1.1 EGTA,10 Phosphocreatine, 2 MgATP',Vm=NaN,isSharpElectrode=false,O2_CO2_95_5=true,pHo=NaN,pHi=7.25).log(); //Experimental Erev in Soma=-85 after Vj=-12 correction = -73, GHK -100.51 without HCO3 correction -84.06 after half HCO3 correction HCO3i= 14.36 -73.99 after full HCO3 correction HCO3i= 28.73
  //Hájos 1997 Synaptic communication among hippocampal interneurons: properties of spontaneous IPSCs in morphologically identified cells.
  //exp20 = new solution(34,'126 NaCl, 2.5 KCl, 26 NaHCO3, 2 CaCl2, 2 MgCl2, 1.25 NaH2PO4','135 Cs-Gluconate, 5 CsCl, 20 HEPES, 2 MgCl2 , 2 MgATP',Vm=NaN,isSharpElectrode=false,O2_CO2_95_5=true,pHo=NaN,pHi=7.25).log(); //Experimental Erev in Soma=-44.6±2.6, GHK without HCO3 correction=-60.84 after HCO3 correction=-66.17
  //Tsai 2012 Autistic-like behaviour and cerebellar dysfunction in Purkinje cell Tsc1 mutant mice -> liqiud junction potential is not corrected
  //exp21 = new solution(34,'125 NaCl, 26 NaHCO3, 1.25 NaH2PO4, 2.5 KCl, 1 MgCl2, 2 CaCl2','140 Cs-Gluconate, 15 HEPES, 0.5 EGTA, 2 TEA-Cl, 2 MgATP, 0.3 NaGTP, 10 Phosphocreatine-Tris2, 2 QX314-Cl',RMP=NaN,isSharpElectrode=false,O2_CO2_95_5=true,pHo=7.3,pHi=7.2).log(); //Experimental Erev in Soma=-65 not corrected for Vj, GHK without HCO3 correction=-93.75 after HCO3 half correction=-80.55 HCO3 full correction -71.79

  //---------------sharp electrode  
  //Buckmaster 1993 A comparison of rat hippocampal mossy cells and CA3c pyramidal cells.
//  new solution(celsius=35,
//               eSolution='124 NaCl, 5 KCl,1.25 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2 CaCl2',
//               iSolution='4000 K-Acetate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:-74,EPSC:NaN,IPSP:NaN,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();
  //Buhl 1994 Diverse sources of hippocampal unitary inhibitory postsynaptic potentials and the number of synaptic release sites.
  //Sharp elctrode: Experimental Erev at [-65 to -50] mV RMP from Soma=[-78 to -65]; without accetate GHK=[-74.9 to -73.1]
//  new solution(celsius=35,
//               eSolution='126 NaCl, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4, 2.0 CaCl2',
//               iSolution='1500 K-Methylsulfate',
//               recordingMethod='sharp electrode',
//               voltages={Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{IPSC:NaN,EPSC:NaN,IPSP:-77,EPSP:NaN}, Vj:{exp:NaN,correctedAlready:false}},
//               pH={e:NaN,i:NaN,CO2:true}).log();

  //Ali 1999 IPSPs elicited in CA1 pyramidal cells by putative basket cells in slices of adult rat hippocampus.
  //exp9 = new solution(34,'124 NaCl, 25.5 NaHCO3, 3.3 KCl, 1.2 KH2PO4, 1.0 MgSO4, 2.5 CaCl2','2000 K-Methylsulfate',Vm=-60,isSharpElectrode=true,O2_CO2_95_5=true,pHo=NaN,pHi=NaN).log(); //Sharp elctrode: Experimental Erev in Soma=-72.4±5.5, GHK=-72.11
  //Buckmaster 1993 A comparison of rat hippocampal mossy cells and CA3c pyramidal cells.
  //exp13= new solution(35,'124 NaCl, 5 KCl,1.25 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2 CaCl2','4000 K-acetate',Vm=-73,isSharpElectrode=true,O2_CO2_95_5=true,pHo=NaN,pHi=NaN).log(); //Sharp elctrode: Experimental Erev in Mossy cell Soma=-71±5.1 [-97 to -68], with acetate GHK=+70.61, without accetate GHK=-77.95
  //exp14= new solution(35,'124 NaCl, 5 KCl,1.25 NaH2PO4, 1.2 MgSO4, 26 NaHCO3, 2 CaCl2','4000 K-acetate',-71,true).log(); //Sharp elctrode: Experimental Erev in CA3c Pyramidal cell Soma=-74±4.3; -75{Fig. 11}, without accetate GHK=-77.77
  
  //Buhl 1994 Physiological properties of anatomically identified axo-axonic cells in the rat hippocampus.
  //exp15= new solution(35,'126 NaCl, 3.0 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2.0 MgSO4, 2.0 CaCl2','1500 K-Methylsulfate',Vm=-65.1,isSharpElectrode=true,O2_CO2_95_5=true,pHo=NaN,pHi=NaN).log(); //Sharp elctrode: Experimental Erev at -65.1 mV RMP from Soma=-66.5; without accetate GHK=-74.91
  //Cobb 1995 Synchronization of neuronal activity in hippocampus by individual GABAergic interneurons.
  //exp16= new solution(35,'126 NaCl, 3 KCl, 1.25 NaH2PO4, 24 NaHCO3, 2 MgSO4, 2 CaCl2','1500 K-Methylsulfate',Vm=NaN,isSharpElectrode=true,O2_CO2_95_5=true,pHo=7.2,pHi=NaN).log(); //Sharp elctrode: Experimental Erev at ? mV RMP from Soma=-75.5±7.6; without accetate GHK=-83.55
  //Empson 1995 The perforant path projection to hippocampal area CA1 in the rat hippocampal-entorhinal cortex combined slice.
  //exp17= new solution(34,'124 NaCl, 26 NaHCO3, 3 KCl, 1.25 NaH2PO4, 1.6 CaCl2, 1.8 MgSO4','2500 K-acetate',Vm=-61,isSharpElectrode=true,O2_CO2_95_5=true,pHo=7.2,pHi=NaN).log(); //Sharp elctrode: Experimental Erev at ? mV RMP from Soma=-66.9±0.9;-69.2±0.7;-71.8±1.22;-85.9±2.3 for IPSPs, 7.5±0.2;8.6±0.6;13.2±1.2 for EPSPs, GHK=IPSP:-79.25  EPSP:-8.21
  //---------------perforated patch  
  //Dallwig 1999 On the mechanism of GABA-induced currents in cultured rat cortical neurons -> HCO3-Cl cotransport
  //exp10 = new experiment(22,'125 NaCl, 2.5 KCl, 26 NaHCO3, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2','',Vm=-70,isSharpElectrode=false,O2_CO2_95_5=true,pHo=7.4,pHi=NaN).log();    //Perforated-patch:HCO3/CO2-buffered saline: Experimental Erev in Soma=–59, GHK at -70 mV RMP =-58.8
  //exp11 = new experiment(22,'125 NaCl, 2.5 KCl, 26 Na-Gluconate, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2','',Vm=-65,isSharpElectrode=false,O2_CO2_95_5=false,pHo=7.4,pHi=NaN).log(); //Perforated-patch:Hepes-buffered saline: Experimental Erev in Soma=-73, GHK at -65 mV RMP=-64.86
  
//---------------outside-out
  //exp18 = new experiment(22,'125 NaCl, 25 NaHCO3, 2.5 KCl, 1.25 NaH2PO4, 2 CaCl2, 1 MgCl2','140 KCl, 10 EGTA, 2 MgCl2, 2 Na2ATP, 10 HEPES',RMP=NaN,isSharpElectrode=false,O2_CO2_95_5=true,pHo=7.2,pHi=7.3).log(); //Experimental Erev in patch=4.5 {ENa}, 9.8 {ECa}, GHK=-3.95
}

var solution = function(celsius,eSolution,iSolution,recordingMethod,voltages,pH) {
  //var voltages = {Vm:{RMP:NaN,Vh:NaN,Vss:NaN}, Erev:{Vh:NaN,Vss:NaN}, Vj:{exp:NaN,correctedAlready:false}};
  //var pH = {e:NaN,i:NaN,CO2:NaN};                                            
  var self = this;
  var R    = 8.314;            // Gas Constant,       unit=J/(mol*K)
  var F    = 96485;		       // Faraday's Constant, unit=coulombs/mol
  var T    = 273.15 + celsius; // Kelvin
  var F_RT = F/R/T;
  var epsilon = 78.478761;     // Dielectric Constants of water
  var A = 1.82e6 * Math.pow((epsilon * T),-3/2); // a constant needed to calculate the ionic activity, A = 0.5085 M-1/2 at 25 degree celsius
  var ionConcentration = function(solution,name) {
    if (solution && name){
      return solution.replace(/^.*[@:]\s*/,'').split(/\s*[,;]\s*/g).filter(Null).reduce(
        function(p,concentrationSformula) {
          var [concentration,formula] = concentrationSformula.split(/\s+/g);
          //Logger.log(concentrationSformula)
          var ionAtomsPerMolecule = 0;
          if (formula.match(RegExp(name+'\\d+','g'))) {
            ionAtomsPerMolecule =  Number(formula.replace(RegExp('.*'+name+'(\\d+).*','g'),'$1'));
          } else if (formula.match(name)) {
            //Logger.log(formula)
            ionAtomsPerMolecule = 1;
          };
          p = p + Number(concentration) * ionAtomsPerMolecule;
          return p;
        },0);
    }
  }
  
 // HEPES has little or no effect on Ionic Strength and activity -> PMID: 18022379
 this.Ions = ["Acetate","ATP","Ba","Br","Ca","Cl","Cs","Cl","F","Gluconate","Glucuronate",
              "GTP","H2PO4","HCO3","HPO4","K","Methylsulfate","Methanesulfonate","Mg",
              "Na","OH","SO4","TEA","Tris","QX314","Zn"].filter(
   function(ionName){
     return (iSolution.match(ionName) || eSolution.match(ionName))
   }).reduce(
   function(p,ionName){
     p[ionName] = new Ion(ionName);
     p[ionName].eC = ionConcentration(eSolution,ionName) * 1e-3;
     p[ionName].iC = ionConcentration(iSolution,ionName) * 1e-3;
     return p;
   },{})
 
// if (!this.HCO3o) {
//   var atmosphericPressure = 760 // mmHg (torr)
//   var CO2volume = (O2_CO2_95_5)? 3 : 0.04 // %  air has 0.04 CO2
//   var pCO2 = CO2volume * atmosphericPressure / 100 // mmHG in air
//   //Henderson Hasselbalch equation
//   this.HCO3o = Math.exp(((pHo)?pHo:7.35)/6.1)*0.3*pCO2 // at pH=7.4 at air pCO2=0.3 mmHG [HCO3]o=0.3 mM
// }
 
 this.updateRelatedConcentrations = function() {
//   this.Nai = (this.Nao)? this.Nao*15/145 : 0;
//   this.Cai = (this.Cao)? 0.1 : 0;
//   if (isNumeric(this.Clo) && isNumeric(this.Ki) && this.Ki !==0) {this.Cli = this.Clo * this.Ko / this.Ki};
   if (this.Ions.HCO3)
     if (this.Ions.HCO3.iC === 0){
       //Dallwig 1999 On the mechanism of GABA-induced currents in cultured rat cortical neurons
       // pHo-pHi=ln([HCO3]i/[HCO3]o) -> [HCO3]i = exp(7.4-7.2)*[HCO3]o
       this.Ions.HCO3.iC = Math.exp(((pH.e)?pH.e:7.35) - ((pH.i)?pH.i:7.3)) * this.Ions.HCO3.eC;
     };
 }
 switch (recordingMethod.toLowerCase()) {
   case 'whole-cell':
//     if (this.Ions.HCO3 && !this.Ions.HCO3.iC){
//       if (pH.CO2) {
         //Dallwig 1999 On the mechanism of GABA-induced currents in cultured rat cortical neurons
         // pHo-pHi=ln([HCO3]i/[HCO3]o) -> [HCO3]i = exp(7.4-7.2)*[HCO3]o
         // since whole cell patch has a dramatic effect on intracellular concentration we assume intracellular hco3 is smaller than predicted values
         //var pHDif = ((pH.e)?pH.e:7.35) - ((pH.i)?pH.i:7.3)
         //this.Ions.HCO3.iC = Math.exp(pHDif) * this.Ions.HCO3.eC;
//       }
//     };
     break;
   case 'sharp electrode':
     this.updateRelatedConcentrations();
//     if (voltages.Vm.RMP || voltages.Vm.Vss) {
//       // we assume the RMP is measured immediately after impalement, but synaptic Erev estimation happened later on
//       // we add a portion of [K]pipet to estimated [K]i for the correction of [K]i
//       //this.Ki = Math.exp(-1 * RMP/1000 * F_RT) * this.Ko + ((this.Ki)?this.Ki:0)/20;
//     } else {
//       this.Ions.K.iC = (this.Ions.K.iC)? 50 + this.Ions.K.iC/10 : 0;
//     }
     break;
   case 'perforated patch':
     //Ma 2012 Bicarbonate efflux via GABA(A) receptors depolarizes membrane potential and inhibits two-pore domain potassium channels of astrocytes in rat hippocampal slices
     // in perforated patch clamp setting the intracellular concentrations are unknown
     // knowing the RMP it is possible to estimate the [K]i and [Cl]i assuming that EK=ECl=Vm
     // [K]i = Math.exp(Vm * -F_RT)*[K]o
     // Question: what happens in the presence of TEA
     this.Ions.K.iC = Math.exp(-1 * voltages.Vm.RMP /1000 * F_RT) * this.Ions.K.eC; 
     this.updateRelatedConcentrations();
     break;
   case 'cell-attached':
     
     break;
   case 'outside–out':
     
     break;
   default:
     
     break;
 }
 
 this.strength = Object.keys(this.Ions).reduce(
   function(p,ionName){
     var ion = self.Ions[ionName];
     //Logger.log(ionName)
     p.e += 0.5 * ion.charge * ion.charge * ion.eC;
     p.i += 0.5 * ion.charge * ion.charge * ion.iC;
     return p;
   },{e:0,i:0})
 
 var activity = function(z,I) {// z= ionic valence, I = ionic strength
   var sqrtI = Math.sqrt(I);
   return Math.pow(10,-A * z * z * (sqrtI/(1 + sqrtI) - 0.3 * I)); //Davies equation valid up to I < 0.5 M
 }
 
 Object.keys(this.Ions).forEach(
   function(ionName){
     var ion = self.Ions[ionName];
     ion.eAc = activity(ion.charge, self.strength.e);
     ion.iAc = activity(ion.charge, self.strength.i);
     ion.eA = ion.eC * ion.eAc;
     ion.iA = ion.iC * ion.iAc;
   })
 
 voltages.Vj.cal = (function(){
   //Barry 1994 JPCalc
   var zigmas = Object.keys(self.Ions).reduce(
     function(p,ionName){
       var ion    = self.Ions[ionName];
       var iA     = ion.iA;  // intracellular ionic activity
       var eA     = ion.eA;  // extracellular (bath) solution ionic activity
       var z      = ion.charge;
       var zmu    = ion.mu * z;
       p.iAz2ma  += z * zmu *  iA;
       p.eAz2ma  += z * zmu *  eA;
       var SFnum  =     zmu * (eA - iA);
       p.SFnum   +=     SFnum;
       p.SFdenum += z * SFnum;
       return p;
     },{SFnum:0,SFdenum:0,iAz2ma:0,eAz2ma:0});
   return round(R*T/F * (zigmas.SFnum / zigmas.SFdenum) * Math.log(zigmas.iAz2ma / zigmas.eAz2ma) * 1000,2)  // = iE-eE
   }())
 
 this.Vj = round(((voltages.Vj.correctedAlready)? 0 : (voltages.Vj.exp) ? voltages.Vj.exp : voltages.Vj.cal),2)
 
 this.ErevCaImpermeableAMPA = (function(){
   //Jatzke 2002 Voltage and concentration dependence of Ca2+ permeability in recombinant glutamate receptor subtypes
   //Traynelis 2010 Glutamate Receptor Ion Channels - Structure, Regulation, and Function
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Na,0.84);    //PNa/PCs-AMPA GluA1       ('Na',145,20  ,0.84,1);
   channel.addIon(self.Ions.K ,1.08);    //PK /PCs-AMPA GluA1       ('K' ,4  ,150 ,1.08,1);
   channel.addIon(self.Ions.Cs,1.00);    //PCs/PCs-AMPA GluA1       ('Cs',4  ,150 ,1.00,1);
   return channel.Erev();
 }())
 this.ErevCaPermeableAMPA = (function(Vh){//Vh or Vss in mV
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Na,0.84);    //PNa/PCs-AMPA GluA1       ('Na',145,20  ,0.84,1);
   channel.addIon(self.Ions.K ,1.08);    //PK /PCs-AMPA GluA1       ('K' ,4  ,150 ,1.08,1);
   channel.addIon(self.Ions.Cs,1.00);    //PCs/PCs-AMPA GluA1       ('Cs',4  ,150 ,1.00,1);
   var P = [{CaPerCs : 0.60, V:-60},{CaPerCs : 0.92, V:-20}];//PCa/PCs-AMPA GluA1 or 2 at -60 and -20 mV {PCa/PCs=PCa/PNa * PNa/Pcs}  ('Ca',2.5,1e-4,0.60,2)
   var PCaPerCs = P[0].CaPerCs;
   if (isNumeric(Vh)) {if (Vh > P[0].V) PCaPerCs = P[0].CaPerCs + (P[1].CaPerCs - P[0].CaPerCs)/(P[1].V - P[0].V)*(Vh - P[0].V)};
   channel.addIon(self.Ions.Ca,PCaPerCs);
   return channel.Erev();
 }())
 this.ErevNMDA = (function(){
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Na,0.77);    //PNa/PCs-NMDA NR1/2A
   channel.addIon(self.Ions.K ,0.88);    //PK /PCs-NMDA NR1/2A
   channel.addIon(self.Ions.Cs,1.00);    //PCs/PCs-NMDA NR1/2A
   channel.addIon(self.Ions.Ca,2.31);    //PCa/PCs-NMDA NR1/2A or 2B
   return channel.Erev();
 }())
 this.ErevGABAA = (function(){
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Cl       ,1   );    //PCl/PCl
   channel.addIon(self.Ions.HCO3     ,0.44);    //PK /PCl=[0.18 to 6] in different studies -> reviewd in Farrant 2007 The cellular, molecular and ionic basis of GABAA receptor signalling
   channel.addIon(self.Ions.Br       ,1.4 );    //PBr/PCl
   channel.addIon(self.Ions.F        ,0.09);    //PF /PCl  Fluoride
   return channel.Erev();
 }())
 this.ErevGABAAwithGluconate = (function(){
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.Cl       ,1   );    //PCl/PCl
   channel.addIon(self.Ions.HCO3     ,0.44);    //PK /PCl=[0.18 to 6] in different studies -> reviewd in Farrant 2007 The cellular, molecular and ionic basis of GABAA receptor signalling
   channel.addIon(self.Ions.Br       ,1.4 );    //PBr/PCl
   channel.addIon(self.Ions.F        ,0.09);    //PF /PCl
   channel.addIon(self.Ions.Gluconate,0.11);    //PF /PCl
   return channel.Erev();
 }())
 this.ErevGABAB = (function(){
   var channel = new GHK(T - 273.15);
   channel.addIon(self.Ions.K,1);
   return channel.Erev();
 }())
 
 this.log = function() {
   Logger.log(
     '\n\nI.e\t\t\t\t'+round(self.strength.e,2)+
     '\nI.i\t\t\t\t'+round(self.strength.i,2)+
       '\n\nVj.exp\t\t\t'+voltages.Vj.exp+
         '\nVj.cal\t\t\t'+voltages.Vj.cal+
           ((voltages.Vm.Vh)?'\nVh\t\t\t\t'+voltages.Vm.Vh+'{without Vj correction};'+round(voltages.Vm.Vh - self.Vj,2)+'{with Vj correction}@{Vh}':'')+
             ((voltages.Vm.Vss)?'\nVss\t\t\t\t'+voltages.Vm.Vss+'{without Vj correction};'+round(voltages.Vm.Vss + self.Vj,2)+'{with Vj correction}@{Vss}':'')+
               ((voltages.Vm.RMP)?'\nRMP\t\t\t'+voltages.Vm.RMP+'{without Vj correction};'+round(voltages.Vm.RMP + self.Vj,2)+'{with Vj correction}@{RMP}':'')+
                 '\n\nErev'+
                     '\n\tGlutamatergic:'+
                       '\n\t\tCalculated:'+
                         '\n\n\t\t'+this.ErevCaImpermeableAMPA+' {AMPA Ca Impermeable}; '+this.ErevCaPermeableAMPA+' {AMPA Ca Permeable}; '+this.ErevNMDA+' {NMDA}'+
                           '\n\n\t\tExperimental:'+
                             '\n\n\t\t'+((voltages.Erev.EPSC || voltages.Erev.EPSP) ? ((voltages.Erev.EPSC) ? voltages.Erev.EPSC : voltages.Erev.EPSP)+' {without Vj correction}; '+round((voltages.Erev.EPSC) ? voltages.Erev.EPSC - self.Vj : voltages.Erev.EPSP + self.Vj, 2)+' {with Vj correction}':'') +
                               '\n\n\tGABAergic:'+
                                 '\n\t\tCalculated:'+
                                   '\n\n\t\t'+this.ErevGABAA+' {GABA-A}; '+this.ErevGABAAwithGluconate+' {GABA-A-Gluconate Permeable}; '+this.ErevGABAB+' {GABA-B}'+
                                     '\n\n\t\tExperimental:'+
                                       '\n\n\t\t'+((voltages.Erev.IPSC || voltages.Erev.IPSP) ? ((voltages.Erev.IPSC) ? voltages.Erev.IPSC : voltages.Erev.IPSP)+' {without Vj correction}; '+round((voltages.Erev.IPSC) ? voltages.Erev.IPSC - self.Vj : voltages.Erev.IPSP + self.Vj, 2)+' {with Vj correction}':'') +
                                         '\n'+Object.keys(self.Ions).reduce(
                                           function(p,ionName) {
                                             var ion  = self.Ions[ionName];
                                             return p+='\n'+ionName+
                                               ':\n\teAc\t\t'+round(ion.eAc,2)+'\t\teC\t\t'+round(ion.eC*1000,2)+
                                                 '\n\tiAc\t\t'+round(ion.iAc,2)+'\t\tiC\t\t'+round(ion.iC*1000,2)
                                           },''))
 }
}

var GHK = function (celsius){
  var self = this;
  var T = 273.15 + celsius; // Kelvin
  var R = 8.314             // J/(mol*K)
  var F = 96485;		    // coulombs/mol
  var F_RT = F/R/T;
  this.ions = {};
  this.addIon = function(ion,P){
    if (ion) {
      this.ions[ion.name]={
        P    : P,
        cOut : ion.eC, // ionic concentration or activity is in Mols
        cIn  : ion.iC,
        z    : ion.charge,
        zF   : ion.charge * F, 
        zF_RT: ion.charge * F_RT
      };
    };
  }
  var result = Number.MAX_VALUE;
  this.I_GHK = function (ion,V){//V is in volts
    var VzF_RT = V * ion.zF_RT
    var expVzF_RT = Math.exp(VzF_RT);
    var res = ion.P * ion.zF * VzF_RT * (ion.cOut - ion.cIn * expVzF_RT) / (1 - expVzF_RT);
    if (isNumeric(res)) result = res;
    return result;
  };
  this.I = function(V){//in volts
    return Object.keys(this.ions).reduce(
      function(p,key){
        return p + self.I_GHK(self.ions[key],V);
      },0)
  }
  this.ErevAnalytic = function(V){
    //both V and Erev in Volts
    //Lewis 1979 Ion-concentration dependence of the reversal potential and the single channel conductance of ion channels at the frog neuromuscular junction
    return Math.log((Object.keys(this.ions).reduce(
      function(p,key){
        var ion = self.ions[key];
        switch (ion.z){
          case 1:
            return p + ion.cOut * ion.P
            break;
          case -1:
            return p + ion.cIn  * ion.P
            break;
          case 2:
            return p + ion.cOut * ion.P * (1 / (1+Math.exp(V*F_RT)))*4
            break;
          default:
            return p;
            break;
        }
      },0))/(Object.keys(this.ions).reduce(
      function(p,key){
        var ion = self.ions[key];
        var cOut = (ion.cOut)?ion.cOut:0;
        var cIn  = (ion.cIn )?ion.cIn :0;
        switch (ion.z){
          case 1:
            return p + ion.cIn * ion.P
            break;
          case -1:
            return p + ion.cOut * ion.P
            break;
          case 2:
            return p + ion.cIn * ion.P * (1/(1+Math.exp(V*F_RT)))*4*Math.exp(V*F_RT)
            break;
          default:
            return p;
            break;
        }
      },0))) / F_RT
  };
  
  this.Erev = function(){
    var E0 = this.ErevAnalytic()
    //Logger.log('E0='+round(E0 * 1000,2));
    if (E0 || (E0 === 0)) {
      return round(E0 * 1000,2)
    } else {
      var E = E0 = 0;//0 is a good initial condition since it is the point where GHK current equation becomes numerically unstable.
      while(Math.abs(E0 - (E=this.ErevAnalytic(E0)))> 1e-6) {E0 = E};
      // the while loop above is the most efficient iterative solution but I keep using optimization method in case there was ions that are not covered with analytic solution.
      objective = function(V){return Math.abs(self.I(V[0]))}
      E = numeric.uncmin(objective,[this.ErevAnalytic(E0)]).solution[0];
      //Logger.log(['E='+E*1000,'E0='+E0*1000, 'E0='+this.ErevAnalytic(E)*1000]);
      //var E = numeric.uncmin(objective,[this.ErevAnalytic(E)]).solution[0];
      if (isNaN(E)) Logger.log('unexpected condition in Erev function');
      //Logger.log(['E='+E*1000,'E0='+E0*1000, 'E0='+this.ErevAnalytic(E)*1000]);
      return round(E*1000,2);
    };
  }
}

/**
* An Ion. You must have an instance of this class for every ion type
* you have in the solutions.
*/
var Ion = function(name) {
  /**
  * Create an Ion with the given name. Please write the name
  * as "Na", "K", "Cl" and so on. Avoid numbers and symbols
  * like "+" and "-".
  * For some common ions, e.g. "Na" or "K", the physical parameters
  * charge and mobility are automatically set.
  * @param n the name.
  */
  Ion.e = 1.6E-19;
  Ion.Nav = 6.02E23;
  this.name = name
  //this.phi = 0.0;    // ionic flux between intracellular and extracellular solution
  this.eC = 0.0;     // extracellular concentration
  this.iC = 0.0;     // intracellular concentration
  this.eA = 0.0;     // extracellular ionic activity
  this.iA = 0.0;     // intracellular ionic activity
  this.eAc= 0.0;     // extracellular ionic activity coefficient
  this.iAc= 0.0;     // intracellular ionic activity coefficient
  switch (name) {
    case "Acetate":
      this.charge = -1;
      this.mu = 2.65098576E11;
      break;
    case "ATP":
      this.charge = -2; // -2,-3 or -4 The relative proportions of each valency species depends on pH and the ionic composition of the solution.
      this.mu = 0.715194E11;  //assuming ATP's mu
      break;
    case "Ba":
      this.charge = +2;
      this.mu = 2.06343E11;
      break;
    case "Br":
      this.charge = -1;
      this.mu = 5.06774E11;
      break;
    case "Ca":
      this.charge = +2;
      this.mu = 1.92944E11;
      break;
    case "Cl":
      this.charge = -1;
      this.mu = 4.95159E11;
      break;
    case "Cs":
      this.charge = +1;
      this.mu = 5.00934E11;
      break;
    case "F": //Fluoride
      this.charge = -1;
      this.mu = 3.59027388E11;
      break;  
    case "H2PO4":
      this.charge = -1;
      this.mu = 2.33596E11;
      break;
    case "HCO3":
      this.charge = -1;
      this.mu = 2.88751E11;
      break;
    case "HPO4":
      this.charge = -2;
      this.mu = 1.8493E11;
      break;
    case "Glucuronate":
      this.charge = -1;
      this.mu = 1.5734268E11; //assuming Gluconate's mu
      break;      
    case "Gluconate":
      this.charge = -1;
      this.mu = 1.5734268E11;
      break;
    case "GTP":
      this.charge = -1;
      this.mu = 0.715194E11;  //assuming ATP's mu
      break;
    case "K":
      this.charge = +1;
      this.mu = 4.76796E11;
      break;
    case "Mg":
      this.charge = +2;
      this.mu = 1.71953E11;
      break;
    case "Na":
      this.charge = +1;
      this.mu = 3.24958E11;
      break;
    case "OH":
      this.charge = -1;
      this.mu = 1.28478E12;
      break;
    case "Methylsulfate": // Methylsulfate
      this.charge = -1;
      this.mu = 3.16592544E11;
      break;  
    case "Methanesulfonate": //Methylsulfonate (pseudonym: Methanesulfonate, MeSO3) 
      this.charge = -1;
      this.mu = 3.16592544E11;
      break;
    case "SO4":
      this.charge = -2;
      this.mu = 2.59551E11;
      break;
    case "TEA":
      this.charge = 1;
      this.mu = 2.11697424E11;
      break;      
    case "Tris":
      this.charge = 1;
      this.mu = 1.907184E11;
      break;
    case "QX314":
      this.charge = +1;
      this.mu = 2.22663732E11; // Assumed Triethylammonium's mobility instead
      break;
    case "Zn":
      this.charge = +2;
      this.mu = 1.71304E11;
      break;
    default:
      this.charge = 1;
      this.mu = 0.007348 / Ion.Nav / Ion.e / Ion.e;
      break;
  }
};