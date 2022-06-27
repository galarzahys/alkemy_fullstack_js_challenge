-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 27-06-2022 a las 22:16:30
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alkemy_challenge`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operations`
--

DROP TABLE IF EXISTS `operations`;
CREATE TABLE IF NOT EXISTS `operations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `concept` varchar(200) NOT NULL,
  `amount` decimal(10,3) NOT NULL,
  `date` date NOT NULL,
  `type` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `operations`
--

INSERT INTO `operations` (`id`, `concept`, `amount`, `date`, `type`) VALUES
(21, 'nuevo 13', '9872.450', '2022-06-09', 'Profits'),
(11, 'nuevo', '15.250', '2022-06-03', 'Profits'),
(22, 'pago mensual', '533.440', '2022-06-09', 'Profits'),
(13, 'moviento 5', '57.390', '2022-06-08', 'Profits'),
(14, 'nuevo 6', '827.980', '2022-06-03', 'Profits'),
(15, 'nuevo 7', '211.450', '2022-06-03', 'Expense'),
(16, 'nuevo 8', '245.230', '2022-06-14', 'Expense'),
(17, 'nuevo 9', '544.780', '2022-06-09', 'Expense'),
(18, 'nuevo 10', '871.230', '2022-06-14', 'Profits'),
(20, 'nuevo 12', '87.210', '2022-06-08', 'Profits'),
(23, 'asa', '8877.330', '2022-06-03', 'Expense'),
(24, 'ultima operacion', '54.110', '2022-06-10', 'Expense');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) NOT NULL,
  `name` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `password`) VALUES
(1, 'Gonzalo', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
