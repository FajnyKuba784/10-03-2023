-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Kwi 2023, 09:54
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `zawodowe`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kandydaci`
--

CREATE TABLE `kandydaci` (
  `id_kandydata` int(11) NOT NULL,
  `nazwa` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `kandydaci`
--

INSERT INTO `kandydaci` (`id_kandydata`, `nazwa`) VALUES
(1, 'Obama1'),
(2, 'Obama2'),
(3, 'Obama3'),
(4, 'Gartosz');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wybory`
--

CREATE TABLE `wybory` (
  `id` int(20) NOT NULL,
  `kandydat` text NOT NULL,
  `PESEL` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `wybory`
--

INSERT INTO `wybory` (`id`, `kandydat`, `PESEL`) VALUES
(13, 'Obama3', '2147483647'),
(14, 'Obama2', '2147483647'),
(15, 'Obama1', '2147483647'),
(16, 'Obama3', '2147483647'),
(17, 'Obama3', '2147483647'),
(18, 'Obama2', '64'),
(19, 'Obama1', '2147483647'),
(20, 'Obama2', '11632633546'),
(21, 'Obama3', '21142135532'),
(22, 'Obama3', '153532'),
(23, 'Obama3', '323213'),
(24, 'Obama2', '31231232132'),
(25, 'Obama2', '32132132131'),
(26, 'Obama3', '31231231231'),
(27, 'Obama2', '32321312321'),
(28, 'Obama2', '32131231231'),
(29, 'Obama1', '32151513453'),
(30, 'Obama1', '53453425234'),
(31, 'Obama2', '54325243532'),
(32, 'Obama1', '65765475647'),
(33, 'Obama1', '09876541221'),
(37, 'Obama2', '26534623463'),
(40, 'Obama1', '32423142315'),
(44, 'Obama1', '56234643723'),
(47, 'Gartosz', '63426432672');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `kandydaci`
--
ALTER TABLE `kandydaci`
  ADD PRIMARY KEY (`id_kandydata`);

--
-- Indeksy dla tabeli `wybory`
--
ALTER TABLE `wybory`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `kandydaci`
--
ALTER TABLE `kandydaci`
  MODIFY `id_kandydata` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT dla tabeli `wybory`
--
ALTER TABLE `wybory`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
