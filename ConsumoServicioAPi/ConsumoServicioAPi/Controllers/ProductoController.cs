using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ConsumoServicioAPi.Controllers
{
    public class ProductoController : Controller
    {
        // GET: Producto
        public ActionResult ConsultaProducto()
        {
            return View();
        }

        
    }
}