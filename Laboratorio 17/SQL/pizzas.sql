-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-03-2023 a las 04:15:44
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lab17`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ingredientes`
--

CREATE TABLE `ingredientes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `ingredientes`
--

INSERT INTO `ingredientes` (`id`, `nombre`, `created_at`) VALUES
(1, 'tomate', '2023-03-18 20:10:40'),
(2, 'harina', '2023-03-18 20:10:40'),
(3, 'mozzarella', '2023-03-18 20:11:05'),
(4, 'sal', '2023-03-18 20:11:05'),
(5, 'aceite', '2023-03-18 20:11:20'),
(6, 'jamón', '2023-03-18 20:11:20'),
(7, 'piña', '2023-03-18 20:12:22');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `necesita`
--

CREATE TABLE `necesita` (
  `idpizzas` int(11) NOT NULL,
  `idingredientes` int(11) NOT NULL,
  `cantidad` varchar(40) COLLATE utf8mb4_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `necesita`
--

INSERT INTO `necesita` (`idpizzas`, `idingredientes`, `cantidad`) VALUES
(1, 2, NULL),
(1, 3, NULL),
(1, 4, NULL),
(1, 7, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pizzas`
--

CREATE TABLE `pizzas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `imagen` varchar(512) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(512) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `handle` varchar(32) COLLATE utf8mb4_spanish2_ci DEFAULT NULL,
  `precio` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `pizzas`
--

INSERT INTO `pizzas` (`id`, `nombre`, `imagen`, `descripcion`, `handle`, `precio`, `created_at`) VALUES
(1, 'Hawaiana', 'https://napolicartagena.com/wp-content/uploads/2022/01/La-Pizza-Hawaiana-de-Canada.jpg', 'Rica pizza de jamón con piña', '@hawaiana', 200, '2023-03-18 20:12:02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `necesita`
--
ALTER TABLE `necesita`
  ADD PRIMARY KEY (`idingredientes`,`idpizzas`),
  ADD KEY `idhotcakes` (`idpizzas`);

--
-- Indices de la tabla `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ingredientes`
--
ALTER TABLE `ingredientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `pizzas`
--
ALTER TABLE `pizzas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `necesita`
--
ALTER TABLE `necesita`
  ADD CONSTRAINT `necesita_ibfk_1` FOREIGN KEY (`idpizzas`) REFERENCES `pizzas` (`id`),
  ADD CONSTRAINT `necesita_ibfk_2` FOREIGN KEY (`idingredientes`) REFERENCES `ingredientes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;