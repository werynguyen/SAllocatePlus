﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Tna.SAllocatePlus.AdminWebUI.Controllers
{
    [Authorize(Roles="Administrator")]
    public class StaffController : Controller
    {
        // GET: Staff
        public ActionResult Index()
        {
            return View();
        }
    }
}