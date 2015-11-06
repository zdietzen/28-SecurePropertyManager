﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PropertyManager.Core.Models
{
    public class LeaseModel
    {
        public int LeaseId { get; set; }

        public int PropertyId { get; set; }
        public int TenantId { get; set; }

        public DateTime StartDate { get; set; }
        public Nullable<DateTime> EndDate { get; set; }

        public decimal Rent { get; set; }

        public TenantModel Tenant { get; set; }
        public PropertyModel Property { get; set; }
    }
}