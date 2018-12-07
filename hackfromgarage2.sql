-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  ven. 07 déc. 2018 à 01:19
-- Version du serveur :  10.1.37-MariaDB
-- Version de PHP :  7.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `hackfromgarage2`
--

-- --------------------------------------------------------

--
-- Structure de la table `Health`
--

CREATE TABLE `Health` (
  `ID` int(11) NOT NULL,
  `UID` varchar(200) NOT NULL,
  `mass` float NOT NULL,
  `timestamp` int(11) NOT NULL,
  `pulse` int(11) NOT NULL,
  `glycemia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Déchargement des données de la table `Health`
--

INSERT INTO `Health` (`ID`, `UID`, `mass`, `timestamp`, `pulse`, `glycemia`) VALUES
(1, '0', 90, 1544132906, 35, 45),
(2, '103', 95, 2147483647, 180, 45);

-- --------------------------------------------------------

--
-- Structure de la table `Material`
--

CREATE TABLE `Material` (
  `ID` int(11) NOT NULL,
  `UID` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `state` varchar(200) NOT NULL,
  `battery` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Déchargement des données de la table `Material`
--

INSERT INTO `Material` (`ID`, `UID`, `name`, `state`, `battery`) VALUES
(1, '0', '0', '0', 68),
(2, '2', '0', '0', 53);

-- --------------------------------------------------------

--
-- Structure de la table `Message`
--

CREATE TABLE `Message` (
  `ID` int(11) NOT NULL,
  `UID` varchar(200) NOT NULL,
  `texte` varchar(255) NOT NULL,
  `timestamp` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `sender` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Déchargement des données de la table `Message`
--

INSERT INTO `Message` (`ID`, `UID`, `texte`, `timestamp`, `image`, `sender`) VALUES
(1, '0', 'text', 138465373, 'oheikuyfgjsuk7ryhkhejgjer', 'envoyeur');

-- --------------------------------------------------------

--
-- Structure de la table `Meteo`
--

CREATE TABLE `Meteo` (
  `ID` int(11) NOT NULL,
  `UID` varchar(200) NOT NULL,
  `wind_speed` float NOT NULL,
  `hygrometry` int(11) NOT NULL,
  `temperature` float NOT NULL,
  `wind_orientation` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Mission`
--

CREATE TABLE `Mission` (
  `ID` int(11) NOT NULL,
  `UID` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `timestamp` int(11) NOT NULL,
  `description` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Notification`
--

CREATE TABLE `Notification` (
  `ID` int(11) NOT NULL,
  `UID` varchar(200) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `level` varchar(200) NOT NULL,
  `title` varchar(200) NOT NULL,
  `message` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Déchargement des données de la table `Notification`
--

INSERT INTO `Notification` (`ID`, `UID`, `Name`, `level`, `title`, `message`) VALUES
(1, '0', 'name', 'WARNING', '0', '0'),
(2, '0', 'test', 'DANGER', '0', '0');

-- --------------------------------------------------------

--
-- Structure de la table `Path`
--

CREATE TABLE `Path` (
  `ID` int(11) NOT NULL,
  `UID` varchar(200) NOT NULL,
  `id_position` int(11) NOT NULL,
  `id_misson` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Position`
--

CREATE TABLE `Position` (
  `ID` int(11) NOT NULL,
  `UID` varchar(200) NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Health`
--
ALTER TABLE `Health`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `Material`
--
ALTER TABLE `Material`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `Message`
--
ALTER TABLE `Message`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `Meteo`
--
ALTER TABLE `Meteo`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `Mission`
--
ALTER TABLE `Mission`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `Notification`
--
ALTER TABLE `Notification`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `Path`
--
ALTER TABLE `Path`
  ADD PRIMARY KEY (`ID`);

--
-- Index pour la table `Position`
--
ALTER TABLE `Position`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Health`
--
ALTER TABLE `Health`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Material`
--
ALTER TABLE `Material`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Message`
--
ALTER TABLE `Message`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `Meteo`
--
ALTER TABLE `Meteo`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Mission`
--
ALTER TABLE `Mission`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Notification`
--
ALTER TABLE `Notification`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Path`
--
ALTER TABLE `Path`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Position`
--
ALTER TABLE `Position`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
