-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 24, 2023 at 03:13 PM
-- Server version: 10.4.24-MariaDB-log
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wc_ticket`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` smallint(5) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `name`, `phone`, `password`) VALUES
(2, 'Duc', 123, '');

-- --------------------------------------------------------

--
-- Table structure for table `match`
--

CREATE TABLE `match` (
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `group_name` varchar(255) DEFAULT NULL,
  `team_A` varchar(255) DEFAULT NULL,
  `team_B` varchar(255) DEFAULT NULL,
  `stadium` varchar(255) DEFAULT NULL,
  `match_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `match`
--

INSERT INTO `match` (`date`, `time`, `group_name`, `team_A`, `team_B`, `stadium`, `match_id`) VALUES
('2022-11-20', '23:00:00', 'A', 'Qatar', 'Ecuador', 'Al Bayt', 1),
('2022-11-21', '17:00:00', 'B', 'Senegal', 'Netherlands', 'Al Thumama', 2),
('2022-11-21', '20:00:00', 'B', 'England', 'Iran', 'Khalifa', 3),
('2022-11-22', '02:00:00', 'B', 'USA', 'Wales', 'Ahmad Bin Ali', 4),
('2022-11-22', '17:00:00', 'C', 'Argentina', 'Saudi Arabia', 'Lusail', 5),
('2022-11-22', '20:00:00', 'D', 'Denmark', 'Tunisia', 'Education City', 6),
('2022-11-22', '23:00:00', 'C', 'Mexico', 'Poland', '974', 7),
('2022-11-23', '02:00:00', 'D', 'France', 'Australia', 'Al Janoub', 8),
('2022-11-23', '17:00:00', 'F', 'Morocco', 'Croatia', 'Al Bayt', 9),
('2022-11-23', '20:00:00', 'E', 'Germany', 'Japan', 'Khalifa', 10),
('2022-11-23', '23:00:00', 'E', 'Spain', 'Costa Rica', 'Al Thumama', 11),
('2022-11-24', '02:00:00', 'F', 'Belgium', 'Canada', 'Ahmad Bin Ali', 12),
('2022-11-24', '17:00:00', 'G', 'Switzerland', 'Cameroon', 'Al Janoub', 13),
('2022-11-24', '20:00:00', 'H', 'Uruguay', 'Korea', 'Education City', 14),
('2022-11-24', '23:00:00', 'H', 'Portugal', 'Ghana', '974', 15),
('2022-11-25', '02:00:00', 'G', 'Brazil', 'Serbia', 'Lusail', 16),
('2022-11-25', '17:00:00', 'B', 'Wales', 'Iran', 'Ahmad Bin Ali', 17),
('2022-11-25', '20:00:00', 'A', 'Qatar', 'Senegal', 'Al Thumama', 18),
('2022-11-25', '23:00:00', 'A', 'Netherlands', 'Ecuador', 'Khalifa', 19),
('2022-11-26', '02:00:00', 'B', 'England', 'USA', 'Al Bayt', 20),
('2022-11-26', '17:00:00', 'D', 'Tunisia', 'Australia', 'Al Janoub', 21),
('2022-11-26', '20:00:00', 'C', 'Poland', 'Saudi Arabia', 'Education City', 22),
('2022-11-26', '23:00:00', 'D', 'France', 'Denmark', '974', 23),
('2022-11-27', '02:00:00', 'C', 'Argentina', 'Mexico', 'Lusail', 24),
('2022-11-27', '17:00:00', 'E', 'Japan', 'Costa Rica', 'Ahmad Bin Ali', 25),
('2022-11-27', '20:00:00', 'F', 'Belgium', 'Marocco', 'Al Thumama', 26),
('2022-11-27', '23:00:00', 'F', 'Croatia', 'Canada', 'Khalifa', 27),
('2022-11-28', '02:00:00', 'E', 'Spain', 'Germany', 'Al Bayt', 28),
('2022-11-28', '17:00:00', 'G', 'Cameroon', 'Serbia', 'Al Janoub', 29),
('2022-11-28', '20:00:00', 'H', 'Korea', 'Ghana', 'Education City', 30),
('2022-11-28', '23:00:00', 'G', 'Brazil', 'Switzerland', 'Education City', 31),
('2022-11-29', '02:00:00', 'H', 'Portugal', 'Uruguay', 'Lusail', 32),
('2022-11-29', '22:00:00', 'A', 'Netherlands', 'Qatar', 'Al Bayt', 33),
('2022-11-29', '22:00:00', 'A', 'Ecuador', 'Senegal', 'Khalifa', 34),
('2022-11-30', '02:00:00', 'B', 'Iran', 'USA', 'Al Thumama', 35),
('2022-11-30', '02:00:00', 'B', 'Wales', 'England', 'Ahmad Bin Ali', 36),
('2022-11-30', '22:00:00', 'D', 'Australia', 'Denmark', 'Al Janoub', 37),
('2022-11-30', '22:00:00', 'D', 'Tunisia', 'France', 'Education City', 38),
('2022-12-01', '02:00:00', 'C', 'Poland', 'Argentina', '974', 39),
('2022-12-01', '02:00:00', 'C', 'Saudi Arabia', 'Mexico', 'Lusail', 40),
('2022-12-01', '22:00:00', 'F', 'Croatia', 'Belgium', 'Ahmad Bin Ali', 41),
('2022-12-01', '22:00:00', 'F', 'Canada', 'Morocco', 'Al Thumama', 42),
('2022-12-02', '02:00:00', 'E', 'Spain', 'Japan', 'Khalifa', 43),
('2022-12-02', '02:00:00', 'E', 'Costa Rica', 'Germany', 'Al Bayt', 44),
('2022-12-02', '22:00:00', 'H', 'Uruguay', 'Ghana', 'Al Janoub', 45),
('2022-12-02', '22:00:00', 'H', 'Korea', 'Portugal', 'Education City', 46),
('2022-12-03', '02:00:00', 'G', 'Serbia', 'Switzerland', '974', 47),
('2022-12-03', '02:00:00', 'G', 'Cameroon', 'Brazil', 'Lusail', 48);

-- --------------------------------------------------------

--
-- Table structure for table `stand`
--

CREATE TABLE `stand` (
  `stand_id` int(11) NOT NULL,
  `stand_name` varchar(50) NOT NULL,
  `capacity` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `match_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stand`
--

INSERT INTO `stand` (`stand_id`, `stand_name`, `capacity`, `price`, `match_id`) VALUES
(1, 'Category_A', 100, '220', 1),
(2, 'Category_B', 50, '69', 1),
(3, 'Category_C', 100, '165', 1),
(4, 'Category_D', 50, '40', 1),
(5, 'Category_A', 100, '220', 2),
(6, 'Category_B', 50, '69', 2),
(7, 'Category_C', 100, '165', 2),
(8, 'Category_D', 50, '40', 2),
(9, 'Category_A', 100, '220', 3),
(10, 'Category_B', 50, '69', 3),
(11, 'Category_C', 100, '165', 3),
(12, 'Category_D', 50, '40', 3),
(13, 'Category_A', 100, '220', 4),
(14, 'Category_B', 50, '69', 4),
(15, 'Category_C', 100, '165', 4),
(16, 'Category_D', 50, '40', 4),
(17, 'Category_A', 100, '220', 5),
(18, 'Category_B', 50, '69', 5),
(19, 'Category_C', 100, '165', 5),
(20, 'Category_D', 50, '40', 5),
(21, 'Category_A', 100, '220', 6),
(22, 'Category_B', 50, '69', 6),
(23, 'Category_C', 100, '165', 6),
(24, 'Category_D', 50, '40', 6),
(25, 'Category_A', 100, '220', 7),
(26, 'Category_B', 50, '69', 7),
(27, 'Category_C', 100, '165', 7),
(28, 'Category_D', 50, '40', 7),
(29, 'Category_A', 100, '220', 8),
(30, 'Category_B', 50, '69', 8),
(31, 'Category_C', 100, '165', 8),
(32, 'Category_D', 50, '40', 8),
(33, 'Category_A', 100, '220', 9),
(34, 'Category_B', 50, '69', 9),
(35, 'Category_C', 100, '165', 9),
(36, 'Category_D', 50, '40', 9),
(37, 'Category_A', 100, '220', 10),
(38, 'Category_B', 50, '69', 10),
(39, 'Category_C', 100, '165', 10),
(40, 'Category_D', 50, '40', 10),
(41, 'Category_A', 100, '220', 11),
(42, 'Category_B', 50, '69', 11),
(43, 'Category_C', 100, '165', 11),
(44, 'Category_D', 50, '40', 11),
(45, 'Category_A', 100, '220', 12),
(46, 'Category_B', 50, '69', 12),
(47, 'Category_C', 100, '165', 12),
(48, 'Category_D', 50, '40', 12),
(49, 'Category_A', 100, '220', 13),
(50, 'Category_B', 50, '69', 13),
(51, 'Category_C', 100, '165', 13),
(52, 'Category_D', 50, '40', 13),
(53, 'Category_A', 100, '220', 14),
(54, 'Category_B', 50, '69', 14),
(55, 'Category_C', 100, '165', 14),
(56, 'Category_D', 50, '40', 14),
(57, 'Category_A', 100, '220', 15),
(58, 'Category_B', 50, '69', 15),
(59, 'Category_C', 100, '165', 15),
(60, 'Category_D', 50, '40', 15),
(61, 'Category_A', 100, '220', 16),
(62, 'Category_B', 50, '69', 16),
(63, 'Category_C', 100, '165', 16),
(64, 'Category_D', 50, '40', 16),
(65, 'Category_A', 100, '220', 17),
(66, 'Category_B', 50, '69', 17),
(67, 'Category_C', 100, '165', 17),
(68, 'Category_D', 50, '40', 17),
(69, 'Category_A', 100, '220', 18),
(70, 'Category_B', 50, '69', 18),
(71, 'Category_C', 100, '165', 18),
(72, 'Category_D', 50, '40', 18),
(73, 'Category_A', 100, '220', 19),
(74, 'Category_B', 50, '69', 19),
(75, 'Category_C', 100, '165', 19),
(76, 'Category_D', 50, '40', 19),
(77, 'Category_A', 100, '220', 20),
(78, 'Category_B', 50, '69', 20),
(79, 'Category_C', 100, '165', 20),
(80, 'Category_D', 50, '40', 20),
(81, 'Category_A', 100, '220', 21),
(82, 'Category_B', 50, '69', 21),
(83, 'Category_C', 100, '165', 21),
(84, 'Category_D', 50, '40', 21),
(85, 'Category_A', 100, '220', 22),
(86, 'Category_B', 50, '69', 22),
(87, 'Category_C', 100, '165', 22),
(88, 'Category_D', 50, '40', 22),
(89, 'Category_A', 100, '220', 23),
(90, 'Category_B', 50, '69', 23),
(91, 'Category_C', 100, '165', 23),
(92, 'Category_D', 50, '40', 23),
(93, 'Category_A', 100, '220', 24),
(94, 'Category_B', 50, '69', 24),
(95, 'Category_C', 100, '165', 24),
(96, 'Category_D', 50, '40', 24),
(97, 'Category_A', 100, '220', 25),
(98, 'Category_B', 50, '69', 25),
(99, 'Category_C', 100, '165', 25),
(100, 'Category_D', 50, '40', 25),
(101, 'Category_A', 100, '220', 26),
(102, 'Category_B', 50, '69', 26),
(103, 'Category_C', 100, '165', 26),
(104, 'Category_D', 50, '40', 26),
(105, 'Category_A', 100, '220', 27),
(106, 'Category_B', 50, '69', 27),
(107, 'Category_C', 100, '165', 27),
(108, 'Category_D', 50, '40', 27),
(109, 'Category_A', 100, '220', 28),
(110, 'Category_B', 50, '69', 28),
(111, 'Category_C', 100, '165', 28),
(112, 'Category_D', 50, '40', 28),
(113, 'Category_A', 100, '220', 29),
(114, 'Category_B', 50, '69', 29),
(115, 'Category_C', 100, '165', 29),
(116, 'Category_D', 50, '40', 29),
(117, 'Category_A', 100, '220', 30),
(118, 'Category_B', 50, '69', 30),
(119, 'Category_C', 100, '165', 30),
(120, 'Category_D', 50, '40', 30),
(121, 'Category_A', 100, '220', 31),
(122, 'Category_B', 50, '69', 31),
(123, 'Category_C', 100, '165', 31),
(124, 'Category_D', 50, '40', 31),
(125, 'Category_A', 100, '220', 32),
(126, 'Category_B', 50, '69', 32),
(127, 'Category_C', 100, '165', 32),
(128, 'Category_D', 50, '40', 32),
(129, 'Category_A', 100, '220', 33),
(130, 'Category_B', 50, '69', 33),
(131, 'Category_C', 100, '165', 33),
(132, 'Category_D', 50, '40', 33),
(133, 'Category_A', 100, '220', 34),
(134, 'Category_B', 50, '69', 34),
(135, 'Category_C', 100, '165', 34),
(136, 'Category_D', 50, '40', 34),
(137, 'Category_A', 100, '220', 35),
(138, 'Category_B', 50, '69', 35),
(139, 'Category_C', 100, '165', 35),
(140, 'Category_D', 50, '40', 35),
(141, 'Category_A', 100, '220', 36),
(142, 'Category_B', 50, '69', 36),
(143, 'Category_C', 100, '165', 36),
(144, 'Category_D', 50, '40', 36),
(145, 'Category_A', 100, '220', 37),
(146, 'Category_B', 50, '69', 37),
(147, 'Category_C', 100, '165', 37),
(148, 'Category_D', 50, '40', 37),
(149, 'Category_A', 100, '220', 38),
(150, 'Category_B', 50, '69', 38),
(151, 'Category_C', 100, '165', 38),
(152, 'Category_D', 50, '40', 38),
(153, 'Category_A', 100, '220', 39),
(154, 'Category_B', 50, '69', 39),
(155, 'Category_C', 100, '165', 39),
(156, 'Category_D', 50, '40', 39),
(157, 'Category_A', 100, '220', 40),
(158, 'Category_B', 50, '69', 40),
(159, 'Category_C', 100, '165', 40),
(160, 'Category_D', 50, '40', 40),
(161, 'Category_A', 100, '220', 41),
(162, 'Category_B', 50, '69', 41),
(163, 'Category_C', 100, '165', 41),
(164, 'Category_D', 50, '40', 41),
(165, 'Category_A', 100, '220', 42),
(166, 'Category_B', 50, '69', 42),
(167, 'Category_C', 100, '165', 42),
(168, 'Category_D', 50, '40', 42),
(169, 'Category_A', 100, '220', 43),
(170, 'Category_B', 50, '69', 43),
(171, 'Category_C', 100, '165', 43),
(172, 'Category_D', 50, '40', 43),
(173, 'Category_A', 100, '220', 44),
(174, 'Category_B', 50, '69', 44),
(175, 'Category_C', 100, '165', 44),
(176, 'Category_D', 50, '40', 44),
(177, 'Category_A', 100, '220', 45),
(178, 'Category_B', 50, '69', 45),
(179, 'Category_C', 100, '165', 45),
(180, 'Category_D', 50, '40', 45),
(181, 'Category_A', 100, '220', 46),
(182, 'Category_B', 50, '69', 46),
(183, 'Category_C', 100, '165', 46),
(184, 'Category_D', 50, '40', 46),
(185, 'Category_A', 100, '220', 47),
(186, 'Category_B', 50, '69', 47),
(187, 'Category_C', 100, '165', 47),
(188, 'Category_D', 50, '40', 47),
(189, 'Category_A', 100, '220', 48),
(190, 'Category_B', 50, '69', 48),
(191, 'Category_C', 100, '165', 48),
(192, 'Category_D', 50, '40', 48);

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `transaction_id` smallint(5) NOT NULL,
  `customer_id` smallint(5) NOT NULL,
  `stand_id` int(11) NOT NULL,
  `quantity_of_tickets` int(11) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `date_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `match`
--
ALTER TABLE `match`
  ADD PRIMARY KEY (`match_id`);

--
-- Indexes for table `stand`
--
ALTER TABLE `stand`
  ADD PRIMARY KEY (`stand_id`),
  ADD KEY `fk_stands_matchs` (`match_id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `fk_customer_id` (`customer_id`),
  ADD KEY `fk_stand_id` (`stand_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` smallint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `match`
--
ALTER TABLE `match`
  MODIFY `match_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `stand`
--
ALTER TABLE `stand`
  MODIFY `stand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `transaction_id` smallint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `stand`
--
ALTER TABLE `stand`
  ADD CONSTRAINT `fk_stands_matchs` FOREIGN KEY (`match_id`) REFERENCES `match` (`match_id`);

--
-- Constraints for table `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_stand_id` FOREIGN KEY (`stand_id`) REFERENCES `stand` (`stand_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
