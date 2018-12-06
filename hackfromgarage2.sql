-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le :  jeu. 06 déc. 2018 à 21:32
-- Version du serveur :  8.0.13
-- Version de PHP :  7.2.8

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
  `UID` int(11) NOT NULL,
  `mass` float NOT NULL,
  `timestamp` int(11) NOT NULL,
  `pulse` int(11) NOT NULL,
  `glycemia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Material`
--

CREATE TABLE `Material` (
  `ID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `state` int(11) NOT NULL,
  `battery` int(11) NOT NULL,
  `idPosition` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Message`
--

CREATE TABLE `Message` (
  `ID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `texte` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `timestamp` int(11) NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sender` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Meteo`
--

CREATE TABLE `Meteo` (
  `ID` int(11) NOT NULL,
  `UID` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `wind_speed` float NOT NULL,
  `hygrometry` int(11) NOT NULL,
  `temperature` float NOT NULL,
  `id_position` int(11) NOT NULL,
  `wind_orientation` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Mission`
--

CREATE TABLE `Mission` (
  `ID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `timestamp` int(11) NOT NULL,
  `description` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `idMeteo` int(11) NOT NULL,
  `idPath` int(11) NOT NULL,
  `IdHealth` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Notification`
--

CREATE TABLE `Notification` (
  `ID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `Name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `level` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` int(11) NOT NULL,
  `message` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Path`
--

CREATE TABLE `Path` (
  `ID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
  `idPosition` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Position`
--

CREATE TABLE `Position` (
  `ID` int(11) NOT NULL,
  `UID` int(11) NOT NULL,
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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Material`
--
ALTER TABLE `Material`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Message`
--
ALTER TABLE `Message`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

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
