﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Tna.SAllocatePlus.ClientServices;

namespace Tna.SAllocatePlus.AdminWebUI.Controllers
{
    [Authorize(Roles="Administrator")]
    public class JobController : Controller
    {
        // GET: Job
        public ActionResult Index()
        {
            return View();
        }
    }
}