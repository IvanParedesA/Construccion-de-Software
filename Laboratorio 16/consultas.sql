
/*
	Mostrar la descripción de los materiales entregados al proyecto CIT Yucatan
    Ordenados por fecha
*/

SELECT Descripcion
FROM Materiales as M, Entregan as E, Proyectos as P
WHERE M.clave = E.clave AND E.numero = P.numero
AND Denominacion = 'CIT Yucatan'
ORDER BY Fecha

/*
  Debido al incremento en los precios, se solicita que genere una tabla con los precios actualizados de los materiales, en un 15%... No se pide que actualice el valor original, se pide que muestre el incremento tentativo */
  
SELECT clave, descripcion, precio as 'precio anterior', precio * 1.15 as 'Precio actualizado'
FROM materiales
ORDER BY precio;

/* Descripción del material, y el total de unidades entregadas (por cada material), solo de aquellos materiales con entregas de unidades mayores a 1000 unidades, ordenados de mayor a menor (total unidades)*/

SELECT m.descripcion, SUM(e.cantidad) as 'Total Unidades'
FROM materiales as m, entregan as e
WHERE m.clave = e.clave
GROUP BY m.descripcion
HAVING SUM(e.cantidad) > 1000
ORDER BY SUM(e.cantidad) DESC

/* Razon Social de los proveedores que entregaron más unidades que el proveedor con razón social 'Comex'.
*/

SELECT p.razonsocial, SUM(e.cantidad) as 'Total de unidades entregadas'
FROM proveedores as p, entregan as e
WHERE p.rfc = e.rfc
GROUP BY p.razonsocial
HAVING SUM(e.cantidad) > (SELECT SUM(e.cantidad) FROM entregan as e,
proveedores p WHERE p.rfc = e.rfc AND p.razonsocial = 'Comex')
ORDER BY SUM(e.cantidad) DESC;