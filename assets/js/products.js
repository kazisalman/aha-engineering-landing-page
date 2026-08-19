/* AHA Engineering - Dynamic Products Loader from Google Sheets API */

const GOOGLE_SHEET_API_URL = 'https://script.google.com/macros/s/AKfycbyteuZnhkiUuuUS1E-wPcdvDOii_mAvkGNo5TnIsdthE5ahuSgLQmeUbVtSk3tmixJ9/exec';
const CACHE_KEY = 'aha_products_cache_v2';

// Embedded initial fallback dataset (syncs live from Google Sheets)
const INITIAL_FALLBACK_DATA = {
  "Industrial Valves": [
    {"Product Name":"Gate Valve","Short Description":"Industrial isolation valve for reliable shut-off in process and pipeline applications.","Key Features / Specifications":"Size, pressure class, body/trim material, end connection, operation","Applications":"Oil & Gas; Chemical; Power; Water; Process Industries","Standards / Certifications":"API 600 / API 602 / ASME B16.34 / API 598 (as applicable)","Brand Type":"Own Brand + Multi-brand","Notes":"Core/high-value product"},
    {"Product Name":"Globe Valve","Short Description":"Valve designed for throttling and flow regulation.","Key Features / Specifications":"Size, pressure class, material, end connection, trim","Applications":"Steam; Process; Chemical; Power","Standards / Certifications":"API 623 / ASME B16.34 / API 598 (as applicable)","Brand Type":"Own Brand + Multi-brand","Notes":"Core/high-value product"},
    {"Product Name":"Ball Valve","Short Description":"Quarter-turn valve for isolation and on/off flow control.","Key Features / Specifications":"Full/Reduced bore, pressure class, material, end connection, operation","Applications":"Oil & Gas; Chemical; Water; Process","Standards / Certifications":"API 6D / API 608 / ASME B16.34 / API 598 (as applicable)","Brand Type":"Own Brand + Multi-brand","Notes":"Core/high-value product"},
    {"Product Name":"Butterfly Valve","Short Description":"Compact quarter-turn valve for isolation and flow control.","Key Features / Specifications":"Wafer/Lug/Flanged, pressure rating, material, seat, operation","Applications":"Water; HVAC; Fire; Chemical; Process","Standards / Certifications":"API 609 / ASME B16.34 / API 598 (as applicable)","Brand Type":"Own Brand + Multi-brand","Notes":"Core/high-value product"},
    {"Product Name":"Check Valve","Short Description":"Non-return valve preventing reverse flow in pipelines.","Key Features / Specifications":"Swing/Wafer/Dual Plate/Lift, material, pressure class","Applications":"Water; Oil & Gas; Chemical; Power","Standards / Certifications":"API 594 / API 6D / API 598 (as applicable)","Brand Type":"Own Brand + Multi-brand","Notes":"Core/high-value product"},
    {"Product Name":"Plug Valve","Short Description":"Quarter-turn valve for isolation in demanding services.","Key Features / Specifications":"Lubricated/Non-lubricated, material, pressure class, end connection","Applications":"Oil & Gas; Chemical; Process","Standards / Certifications":"API 6D / API 599 / API 598 (as applicable)","Brand Type":"Own Brand + Multi-brand","Notes":""},
    {"Product Name":"Knife Gate Valve","Short Description":"Gate valve suited to slurry and difficult media applications.","Key Features / Specifications":"Size, wafer/lug/flanged, material, seat","Applications":"Slurry; Water; Mining; Paper","Standards / Certifications":"MSS / API standards as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Diaphragm Valve","Short Description":"Valve for isolation and control where clean or corrosive service is required.","Key Features / Specifications":"Lining, diaphragm material, pressure rating","Applications":"Chemical; Pharma; Water; Process","Standards / Certifications":"Manufacturer standard / applicable standards","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Control Valve","Short Description":"Automated valve for precise regulation of pressure, flow or temperature.","Key Features / Specifications":"Valve type, Cv, body/trim, actuator, positioner","Applications":"Process; Chemical; Power; HVAC","Standards / Certifications":"IEC/ISA standards as applicable","Brand Type":"Multi-brand","Notes":"Only where application/design support is offered"},
    {"Product Name":"Safety Relief Valve","Short Description":"Pressure protection device designed to relieve excess system pressure.","Key Features / Specifications":"Set pressure, size, material, inlet/outlet","Applications":"Process; Steam; Pressure Systems","Standards / Certifications":"API 526 / API 527 / ASME requirements as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Pneumatic Actuated Valve","Short Description":"Valve package operated using pneumatic actuator.","Key Features / Specifications":"Valve type, actuator torque, accessories, fail action","Applications":"Process; Oil & Gas; Water; Fire","Standards / Certifications":"Applicable valve/actuator standards","Brand Type":"Own Brand + Multi-brand","Notes":"Core solution"},
    {"Product Name":"Electric Actuated Valve","Short Description":"Motor-operated valve package for remote/on-off control.","Key Features / Specifications":"Torque, power supply, IP rating, actuator type","Applications":"Water; HVAC; Process; Fire","Standards / Certifications":"Applicable valve/actuator standards","Brand Type":"Own Brand + Multi-brand","Notes":"Core solution"},
    {"Product Name":"Strainer","Short Description":"Pipeline filtration device for protecting downstream equipment.","Key Features / Specifications":"Y/Basket/Duplex, mesh, material, pressure rating","Applications":"Water; Process; Pumps; HVAC","Standards / Certifications":"ASME / manufacturer standards as applicable","Brand Type":"Multi-brand","Notes":""}
  ],
  "Pipes & Piping": [
    {"Product Name":"Carbon Steel Pipes","Short Description":"Carbon steel piping for industrial and utility applications.","Key Features / Specifications":"Size, schedule/thickness, grade, seamless/welded","Applications":"Oil & Gas; Water; Process; Fire","Standards / Certifications":"ASTM / ASME / API standards as applicable","Brand Type":"Multi-brand","Notes":"Core product"},
    {"Product Name":"Stainless Steel Pipes","Short Description":"Corrosion-resistant piping for demanding process services.","Key Features / Specifications":"Grade, size, schedule, seamless/welded","Applications":"Chemical; Pharma; Food; Process","Standards / Certifications":"ASTM / ASME standards as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"GI Pipes","Short Description":"Galvanized steel pipes for utility and general services.","Key Features / Specifications":"Size, class/thickness, length","Applications":"Plumbing; Fire; Utility","Standards / Certifications":"IS/ASTM standards as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"HDPE Pipes","Short Description":"Polyethylene piping for water and utility networks.","Key Features / Specifications":"OD, SDR/PN, PE grade, jointing","Applications":"Water; Irrigation; Utility; Fire (where approved)","Standards / Certifications":"IS/ISO standards as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Pipe Fittings","Short Description":"Elbows, tees, reducers and other fittings for piping systems.","Key Features / Specifications":"Size, schedule, material, end type","Applications":"Industrial; Plumbing; Process","Standards / Certifications":"ASME B16.9 / B16.11 / applicable standards","Brand Type":"Multi-brand","Notes":"Core product family"},
    {"Product Name":"Flanges","Short Description":"Flanged connections for piping and equipment.","Key Features / Specifications":"Type, class, size, material, facing","Applications":"Industrial; Process; Utility","Standards / Certifications":"ASME B16.5 / B16.47 / applicable standards","Brand Type":"Multi-brand","Notes":"Core product family"},
    {"Product Name":"Gaskets","Short Description":"Sealing components for flanged and equipment connections.","Key Features / Specifications":"Type, material, size, class","Applications":"Process; Piping; Equipment","Standards / Certifications":"ASME / API / applicable standards","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Fasteners","Short Description":"Industrial bolts, nuts and studs for piping and equipment.","Key Features / Specifications":"Grade, size, coating, material","Applications":"Piping; Structural; Equipment","Standards / Certifications":"ASTM / ASME standards as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Expansion Joints","Short Description":"Flexible components for absorbing thermal movement and vibration.","Key Features / Specifications":"Type, size, material, movement","Applications":"Piping; HVAC; Process","Standards / Certifications":"EJMA / applicable standards","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Pipe Supports","Short Description":"Supports and accessories for safe routing of piping systems.","Key Features / Specifications":"Type, size, material, load","Applications":"Industrial; HVAC; Utility","Standards / Certifications":"Project specifications / applicable standards","Brand Type":"Multi-brand","Notes":""}
  ],
  "Fire Protection": [
    {"Product Name":"Fire Hydrant System","Short Description":"Complete hydrant infrastructure for firefighting water distribution.","Key Features / Specifications":"Hydrant valves, hoses, landing valves, piping, accessories","Applications":"Industrial; Commercial; Warehouses; Plants","Standards / Certifications":"NFPA / IS / local fire requirements as applicable","Brand Type":"Own/Partner + Multi-brand","Notes":"Core turnkey solution"},
    {"Product Name":"Automatic Sprinkler System","Short Description":"Automatic water-based fire suppression system for protected areas.","Key Features / Specifications":"Sprinkler heads, alarm valves, piping, fittings, accessories","Applications":"Industrial; Commercial; Warehouses; Buildings","Standards / Certifications":"NFPA 13 / IS / local requirements as applicable","Brand Type":"Partner + Multi-brand","Notes":"Core turnkey solution"},
    {"Product Name":"Fire Pump System","Short Description":"Firewater pumping package for maintaining required firefighting flow and pressure.","Key Features / Specifications":"Electric/diesel main pump, jockey pump, controller, accessories","Applications":"Industrial; Commercial; Plants","Standards / Certifications":"NFPA 20 / IS / local requirements as applicable","Brand Type":"Partner + Multi-brand","Notes":"Core/high-value"},
    {"Product Name":"Fire Alarm & Detection System","Short Description":"Addressable/conventional detection and alarm system.","Key Features / Specifications":"FACP, detectors, MCPs, sounders, modules","Applications":"Commercial; Industrial; Hospitals; Buildings","Standards / Certifications":"NFPA 72 / IS / local requirements as applicable","Brand Type":"Partner + Multi-brand","Notes":"Core turnkey solution"},
    {"Product Name":"Fire Extinguishers","Short Description":"Portable extinguishers for first-response firefighting.","Key Features / Specifications":"ABC, CO2, Foam, Water, Clean Agent, capacities","Applications":"Industrial; Commercial; Offices; Warehouses","Standards / Certifications":"IS / BIS and applicable standards","Brand Type":"Multi-brand","Notes":"Core product"},
    {"Product Name":"Deluge System","Short Description":"Open-nozzle water discharge system for high-hazard areas.","Key Features / Specifications":"Deluge valve, nozzles, detection/release, piping","Applications":"Oil & Gas; Power; High Hazard","Standards / Certifications":"NFPA / applicable standards","Brand Type":"Partner + Multi-brand","Notes":"High-value solution"},
    {"Product Name":"Foam Fire Suppression","Short Description":"Foam-based system for flammable-liquid hazards.","Key Features / Specifications":"Foam proportioner, concentrate, chambers/nozzles, piping","Applications":"Oil & Gas; Chemical; Tank Farms","Standards / Certifications":"NFPA / applicable standards","Brand Type":"Partner + Multi-brand","Notes":""},
    {"Product Name":"Clean Agent Fire Suppression","Short Description":"Clean-agent system for sensitive equipment and enclosed spaces.","Key Features / Specifications":"Agent cylinders, piping, nozzles, control panel, detection","Applications":"Data Centers; Server Rooms; Electrical Rooms","Standards / Certifications":"NFPA / ISO / applicable standards","Brand Type":"Partner + Multi-brand","Notes":"High-value solution"},
    {"Product Name":"Fire Hoses & Accessories","Short Description":"Hoses, nozzles, branch pipes, hose reels and firefighting accessories.","Key Features / Specifications":"Diameter, length, coupling, pressure","Applications":"Industrial; Commercial; Fire Systems","Standards / Certifications":"IS / NFPA as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Fire Doors","Short Description":"Fire-rated doors for compartmentation and escape routes.","Key Features / Specifications":"Fire rating, leaf type, hardware, finish","Applications":"Buildings; Industrial; Commercial","Standards / Certifications":"IS / BS / EN as specified","Brand Type":"Partner + Multi-brand","Notes":""}
  ],
  "ELV & Security": [
    {"Product Name":"CCTV Surveillance System","Short Description":"Video surveillance solution using IP or analog cameras and recording systems.","Key Features / Specifications":"Camera type, resolution, lens, NVR/DVR, storage, VMS","Applications":"Industrial; Commercial; Warehouses; Buildings","Standards / Certifications":"Project specifications / applicable standards","Brand Type":"Multi-brand","Notes":"Core ELV solution"},
    {"Product Name":"IP CCTV Cameras","Short Description":"Network cameras for video monitoring and security.","Key Features / Specifications":"Resolution, lens, IR, IP rating, PoE, analytics","Applications":"Industrial; Commercial; Outdoor; Indoor","Standards / Certifications":"ONVIF / manufacturer specifications","Brand Type":"Multi-brand","Notes":"Core product"},
    {"Product Name":"NVR / DVR","Short Description":"Video recording platforms for CCTV systems.","Key Features / Specifications":"Channels, storage, compression, network interfaces","Applications":"Security; Surveillance","Standards / Certifications":"ONVIF / manufacturer specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Access Control System","Short Description":"Electronic access management for controlled entry points.","Key Features / Specifications":"Controller, readers, credentials, locks, software","Applications":"Commercial; Industrial; Offices; Data Centers","Standards / Certifications":"Project specifications","Brand Type":"Multi-brand","Notes":"Core ELV solution"},
    {"Product Name":"Biometric / Face Recognition","Short Description":"Identity-based access and attendance systems.","Key Features / Specifications":"Fingerprint/face/card, capacity, connectivity","Applications":"Offices; Industrial; Commercial","Standards / Certifications":"Manufacturer specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Boom Barrier","Short Description":"Vehicle access control barrier for entrances and parking.","Key Features / Specifications":"Arm length, speed, loop/radar, control interface","Applications":"Industrial; Commercial; Parking","Standards / Certifications":"Manufacturer specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Network Switches","Short Description":"Managed/unmanaged switches for data and PoE networks.","Key Features / Specifications":"Ports, PoE budget, uplink, managed features","Applications":"Enterprise; CCTV; Industrial; Data","Standards / Certifications":"IEEE / manufacturer specifications","Brand Type":"Multi-brand","Notes":"Core product"},
    {"Product Name":"Routers","Short Description":"Network routing and internet connectivity equipment.","Key Features / Specifications":"WAN/LAN ports, throughput, VPN, Wi-Fi options","Applications":"Enterprise; Industrial; Offices","Standards / Certifications":"IEEE / manufacturer specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Wi-Fi Access Points","Short Description":"Wireless access points for indoor/outdoor network coverage.","Key Features / Specifications":"Wi-Fi standard, throughput, PoE, coverage","Applications":"Offices; Warehouses; Hospitality; Industrial","Standards / Certifications":"IEEE 802.11 / manufacturer specifications","Brand Type":"Multi-brand","Notes":"Core product"},
    {"Product Name":"Network Racks","Short Description":"Server/network cabinets for structured infrastructure.","Key Features / Specifications":"Rack size, U height, depth, accessories","Applications":"Data; CCTV; Networking","Standards / Certifications":"IEC / manufacturer specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Patch Panels","Short Description":"Termination panels for copper structured cabling.","Key Features / Specifications":"Port count, Cat rating, rack mount","Applications":"Data; Networking; CCTV","Standards / Certifications":"ANSI/TIA / ISO/IEC as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Cat6 / Cat6A Cables","Short Description":"Copper structured cabling for data and network systems.","Key Features / Specifications":"Category, conductor, bandwidth, sheath","Applications":"Networking; CCTV; Access Control","Standards / Certifications":"ANSI/TIA / ISO/IEC as applicable","Brand Type":"Multi-brand","Notes":"Core product"},
    {"Product Name":"Fibre Optic Cable","Short Description":"Optical fibre cable for high-speed and long-distance communication.","Key Features / Specifications":"SM/MM, core count, indoor/outdoor, armouring","Applications":"Data Centers; Telecom; Industrial; Networking","Standards / Certifications":"IEC / ISO/IEC / ITU-T as applicable","Brand Type":"Multi-brand","Notes":"Core product"},
    {"Product Name":"ODF / LIU","Short Description":"Fibre termination and management units.","Key Features / Specifications":"Rack/wall mount, port count, adapter type","Applications":"Data Centers; Telecom; Networking","Standards / Certifications":"IEC / manufacturer specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"SFP Modules","Short Description":"Optical transceiver modules for network switches and devices.","Key Features / Specifications":"Speed, wavelength, reach, connector","Applications":"Networking; Fibre Infrastructure","Standards / Certifications":"MSA / IEEE / manufacturer specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Media Converter","Short Description":"Converts copper Ethernet to fibre connectivity.","Key Features / Specifications":"Port type, fibre type, speed, distance","Applications":"Industrial; Networking; CCTV","Standards / Certifications":"IEEE / manufacturer specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"IP PBX & IP Phones","Short Description":"IP-based voice communication systems.","Key Features / Specifications":"Extensions, SIP support, PoE, features","Applications":"Offices; Industrial; Commercial","Standards / Certifications":"SIP / manufacturer specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"PA / Public Address System","Short Description":"Audio distribution and public announcement solution.","Key Features / Specifications":"Amplifiers, speakers, microphones, zones","Applications":"Industrial; Commercial; Schools; Buildings","Standards / Certifications":"IEC / project specifications","Brand Type":"Multi-brand","Notes":"Core ELV solution"},
    {"Product Name":"Structured Cabling Solution","Short Description":"Complete copper/fibre infrastructure for data connectivity.","Key Features / Specifications":"Cabling, racks, patch panels, outlets, testing","Applications":"Commercial; Industrial; Data Centers","Standards / Certifications":"ANSI/TIA / ISO/IEC as applicable","Brand Type":"Multi-brand","Notes":"Turnkey solution"}
  ],
  "MEP & HVAC": [
    {"Product Name":"HVAC Systems","Short Description":"Heating, ventilation and air-conditioning systems for buildings and industrial facilities.","Key Features / Specifications":"AHU/FCU/VRF/chiller/fans, capacity and controls","Applications":"Commercial; Industrial; Hospitals; Hotels","Standards / Certifications":"ASHRAE / IS / project specifications","Brand Type":"Partner + Multi-brand","Notes":"Turnkey capability"},
    {"Product Name":"Air Handling Units","Short Description":"Central air treatment equipment for ventilation and conditioning.","Key Features / Specifications":"Airflow, static pressure, filters, coils, controls","Applications":"Commercial; Industrial; Pharma; Hospitals","Standards / Certifications":"AHRI / IS / project specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"VRF / VRV Systems","Short Description":"Variable refrigerant flow air-conditioning systems.","Key Features / Specifications":"Cooling capacity, indoor/outdoor units, controls","Applications":"Commercial; Offices; Hotels","Standards / Certifications":"Manufacturer specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Ducting & Air Distribution","Short Description":"Ducts, grilles, diffusers and dampers for HVAC air distribution.","Key Features / Specifications":"Material, gauge, insulation, dimensions","Applications":"Commercial; Industrial; HVAC","Standards / Certifications":"SMACNA / IS / project specifications","Brand Type":"Multi-brand","Notes":"Core MEP product family"},
    {"Product Name":"Mechanical Pumps","Short Description":"Water and process pumping equipment.","Key Features / Specifications":"Flow, head, motor power, material","Applications":"HVAC; Plumbing; Process; Utility","Standards / Certifications":"ISO / project specifications","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Plumbing Systems","Short Description":"Pipes, valves, pumps and sanitary systems for building water services.","Key Features / Specifications":"Water supply, drainage, pumps, fixtures","Applications":"Commercial; Residential; Industrial","Standards / Certifications":"NBC / IS / project specifications","Brand Type":"Multi-brand","Notes":"Turnkey capability"}
  ],
  "Electrical": [
    {"Product Name":"LT Electrical Panels","Short Description":"Low-voltage distribution and control panels.","Key Features / Specifications":"PCC/MCC/DB/APFC/AMF, ratings, busbar, incomer","Applications":"Industrial; Commercial; Buildings","Standards / Certifications":"IEC / IS / project specifications","Brand Type":"Partner + Multi-brand","Notes":"Core MEP capability"},
    {"Product Name":"MCC Panels","Short Description":"Motor control and protection panels for industrial equipment.","Key Features / Specifications":"Motor starters, VFDs, protection, control","Applications":"Industrial; Plants; HVAC","Standards / Certifications":"IEC / IS / project specifications","Brand Type":"Partner + Multi-brand","Notes":"Core product"},
    {"Product Name":"APFC Panels","Short Description":"Automatic power factor correction panels.","Key Features / Specifications":"kVAr rating, capacitor stages, controller","Applications":"Industrial; Commercial","Standards / Certifications":"IEC / IS / project specifications","Brand Type":"Partner + Multi-brand","Notes":"Category-level"},
    {"Product Name":"Cable Trays & Ladders","Short Description":"Cable support systems for power and control cabling.","Key Features / Specifications":"Type, width, material, finish","Applications":"Industrial; Commercial; Infrastructure","Standards / Certifications":"IEC / IS / project specifications","Brand Type":"Multi-brand","Notes":"Core product family"},
    {"Product Name":"Power & Control Cables","Short Description":"Electrical cables for power distribution and control.","Key Features / Specifications":"Voltage grade, conductor, insulation, armouring","Applications":"Industrial; Commercial; Infrastructure","Standards / Certifications":"IS/IEC standards as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"UPS Systems","Short Description":"Uninterruptible power supply for critical loads.","Key Features / Specifications":"Capacity, topology, battery backup, bypass","Applications":"Data Centers; Offices; Critical Facilities","Standards / Certifications":"IEC / manufacturer specifications","Brand Type":"Multi-brand","Notes":""}
  ],
  "Industrial Insulation": [
    {"Product Name":"Thermal Insulation","Short Description":"Insulation systems for reducing heat transfer in industrial applications.","Key Features / Specifications":"Rockwool, glass wool, mineral wool, calcium silicate, etc.","Applications":"Industrial; Process; HVAC","Standards / Certifications":"ASTM / IS / project specifications","Brand Type":"Partner Network","Notes":"Future/partner-executed capability"},
    {"Product Name":"Pipe Insulation","Short Description":"Thermal insulation for hot/cold process and utility piping.","Key Features / Specifications":"Material, thickness, temperature, cladding","Applications":"Industrial; HVAC; Process","Standards / Certifications":"ASTM / IS / project specifications","Brand Type":"Partner Network","Notes":"Future/partner-executed capability"},
    {"Product Name":"HVAC Duct Insulation","Short Description":"Thermal/acoustic insulation for HVAC ductwork.","Key Features / Specifications":"Material, thickness, vapour barrier, facing","Applications":"Commercial; Industrial; HVAC","Standards / Certifications":"ASTM / IS / project specifications","Brand Type":"Partner Network","Notes":""},
    {"Product Name":"Acoustic Insulation","Short Description":"Noise-control insulation for equipment and building services.","Key Features / Specifications":"Material, thickness, acoustic performance","Applications":"Industrial; HVAC; Buildings","Standards / Certifications":"Project specifications","Brand Type":"Partner Network","Notes":""},
    {"Product Name":"Aluminium / GI Cladding","Short Description":"Protective jacketing over insulated piping and equipment.","Key Features / Specifications":"Sheet thickness, finish, jointing","Applications":"Industrial; Process; HVAC","Standards / Certifications":"Project specifications","Brand Type":"Partner Network","Notes":""}
  ],
  "Industrial Safety": [
    {"Product Name":"Personal Protective Equipment (PPE)","Short Description":"Workplace safety equipment for industrial and construction environments.","Key Features / Specifications":"Helmets, shoes, gloves, goggles, harnesses, etc.","Applications":"Industrial; Construction; Warehouses","Standards / Certifications":"IS/EN/ANSI as applicable","Brand Type":"Multi-brand","Notes":"Product family"},
    {"Product Name":"Safety Helmets","Short Description":"Head protection for industrial and construction work.","Key Features / Specifications":"Material, class, chin strap, accessories","Applications":"Construction; Industrial","Standards / Certifications":"IS/EN/ANSI as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Safety Shoes","Short Description":"Protective footwear for industrial workplaces.","Key Features / Specifications":"Toe type, sole, material, rating","Applications":"Industrial; Construction; Warehouses","Standards / Certifications":"IS/EN/ASTM as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Safety Harness","Short Description":"Fall protection equipment for work at height.","Key Features / Specifications":"Full-body harness, attachment points, lanyard","Applications":"Construction; Maintenance; Industrial","Standards / Certifications":"IS/EN/ANSI as applicable","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Gas Detection Systems","Short Description":"Portable and fixed systems for detecting hazardous gases.","Key Features / Specifications":"Sensor type, gas, range, alarm, fixed/portable","Applications":"Oil & Gas; Chemical; Industrial","Standards / Certifications":"IEC / ATEX / applicable standards","Brand Type":"Multi-brand","Notes":"High-value safety solution"},
    {"Product Name":"Emergency Lighting","Short Description":"Emergency illumination and exit lighting systems.","Key Features / Specifications":"Battery backup, duration, mounting","Applications":"Commercial; Industrial; Buildings","Standards / Certifications":"IS/IEC / local requirements","Brand Type":"Multi-brand","Notes":""},
    {"Product Name":"Safety Signage","Short Description":"Safety, warning, mandatory and emergency signs.","Key Features / Specifications":"Material, size, photoluminescent options","Applications":"Industrial; Commercial; Construction","Standards / Certifications":"ISO/IS as applicable","Brand Type":"Multi-brand","Notes":""}
  ]
};

// Category Icon Mapping
function getCategoryIcon(catName) {
  const name = (catName || '').toLowerCase();
  if (name.includes('valve')) return 'settings_input_component';
  if (name.includes('pipe') || name.includes('piping')) return 'polyline';
  if (name.includes('fire')) return 'local_fire_department';
  if (name.includes('elv') || name.includes('security') || name.includes('cctv')) return 'videocam';
  if (name.includes('mep') || name.includes('hvac')) return 'hvac';
  if (name.includes('electr')) return 'electric_bolt';
  if (name.includes('insul')) return 'layers';
  if (name.includes('safe') || name.includes('ppe')) return 'health_and_safety';
  return 'inventory_2';
}

// Convert Category Name to URL Slug (e.g. "Industrial Valves" -> "cat-industrial-valves")
function slugifyCategory(catName) {
  return 'cat-' + (catName || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Helper to sanitize text for HTML injection
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', () => {
  const mobileSliderContainer = document.querySelector('.mobile-category-slider');
  const desktopSidebarMenu = document.querySelector('.products-sidebar-menu');
  const productsContentArea = document.querySelector('.products-content');

  if (!productsContentArea) return; // Not on products page

  let dataRendered = false;

  // 1. Instantly render from local cache OR embedded fallback (0ms delay!)
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (cachedData) {
    try {
      const parsed = JSON.parse(cachedData);
      if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
        renderProductsPage(parsed);
        dataRendered = true;
      }
    } catch (e) {
      console.warn('Invalid products cache', e);
    }
  }

  // Fallback if no cache yet
  if (!dataRendered) {
    renderProductsPage(INITIAL_FALLBACK_DATA);
    dataRendered = true;
  }

  // 2. Fetch fresh live data from Google Sheets API in background
  fetch(GOOGLE_SHEET_API_URL)
    .then(res => res.json())
    .then(data => {
      if (data && typeof data === 'object' && Object.keys(data).length > 0) {
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        renderProductsPage(data); // Silently updates DOM if user edited sheet
      }
    })
    .catch(err => {
      console.warn('Background sync with Google Sheet failed, using cached/fallback data:', err);
    });

  // Function to render full Products UI dynamically
  function renderProductsPage(categoriesMap) {
    const categories = Object.keys(categoriesMap);
    if (categories.length === 0) return;

    let mobileSliderHtml = '';
    let desktopSidebarHtml = '';
    let productsContentHtml = '';

    categories.forEach((catName, index) => {
      const slug = slugifyCategory(catName);
      const catNum = String(index + 1).padStart(2, '0');
      const totalCats = String(categories.length).padStart(2, '0');
      const products = categoriesMap[catName] || [];

      // 1. Mobile Slider Button
      mobileSliderHtml += `
        <button class="mobile-category-btn ${index === 0 ? 'active' : ''}" data-cat="${slug}">
          ${escapeHtml(catName)}
        </button>
      `;

      // 2. Desktop Sidebar Menu Item
      desktopSidebarHtml += `
        <a href="#${slug}" class="products-sidebar-item ${index === 0 ? 'active' : ''}">
          <span class="cat-num">${catNum}</span> ${escapeHtml(catName)}
        </a>
      `;

      // 3. Products Section Content
      let productCardsHtml = '';
      products.forEach((prod) => {
        const prodName = prod['Product Name'] || 'Industrial Product';
        const shortDesc = prod['Short Description'] || '';
        const specs = prod['Key Features / Specifications'] || '';
        const apps = prod['Applications'] || '';
        const standards = prod['Standards / Certifications'] || '';
        const brand = prod['Brand Type'] || 'INDUSTRIAL GRADE';
        const notes = prod['Notes'] || '';
        const icon = getCategoryIcon(catName);

        const inquiryUrl = `contact.html?segment=products&product=${encodeURIComponent(prodName)}`;

        productCardsHtml += `
          <div class="product-card-imageless brutalist-border">
            <div class="blueprint-grid"></div>
            <div class="product-card-imageless-header">
              <div class="product-card-icon-wrap">
                <span class="material-symbols-outlined">${icon}</span>
              </div>
              <span class="product-card-badge">${escapeHtml(brand.toUpperCase())}</span>
            </div>
            <div class="product-card-content">
              <h4 class="product-card-title">${escapeHtml(prodName)}</h4>
              ${notes ? `<p class="product-card-subtypes">${escapeHtml(notes)}</p>` : ''}
              ${shortDesc ? `<p class="product-card-desc">${escapeHtml(shortDesc)}</p>` : ''}
            </div>
            <div class="product-specs-table">
              ${specs ? `
              <div class="product-spec-row">
                <span class="product-spec-label">Key Specs:</span>
                <span class="product-spec-value">${escapeHtml(specs)}</span>
              </div>` : ''}
              ${apps ? `
              <div class="product-spec-row">
                <span class="product-spec-label">Applications:</span>
                <span class="product-spec-value">${escapeHtml(apps)}</span>
              </div>` : ''}
              ${standards ? `
              <div class="product-spec-row">
                <span class="product-spec-label">Standards:</span>
                <span class="product-spec-value">${escapeHtml(standards)}</span>
              </div>` : ''}
            </div>
            <a href="${inquiryUrl}" class="btn-secondary brutalist-border product-card-cta-btn">
              INQUIRE NOW <span class="material-symbols-outlined">send</span>
            </a>
          </div>
        `;
      });

      productsContentHtml += `
        <section class="products-section ${index === 0 ? 'active' : ''}" id="${slug}">
          <div class="products-section-header">
            <span class="products-section-num">DIVISION ${catNum} / ${totalCats}</span>
            <h3 class="products-section-title">${escapeHtml(catName)}</h3>
            <p class="products-section-desc">
              High-performance ${escapeHtml(catName.toLowerCase())} engineered for heavy-duty industrial, infrastructure, and commercial operations.
            </p>
          </div>

          <div class="products-grid">
            ${productCardsHtml || '<p style="color: var(--color-on-surface-variant);">No products available in this category.</p>'}
          </div>
        </section>
      `;
    });

    // Inject into DOM
    if (mobileSliderContainer) mobileSliderContainer.innerHTML = mobileSliderHtml;
    if (desktopSidebarMenu) desktopSidebarMenu.innerHTML = desktopSidebarHtml;
    productsContentArea.innerHTML = productsContentHtml;

    // Re-bind click and navigation handlers
    initCategorySwitching();
  }

  // Switch category functionality
  function initCategorySwitching() {
    const productsNavItems = document.querySelectorAll('.products-sidebar-item');
    const mobileCatBtns = document.querySelectorAll('.mobile-category-btn');
    const productSections = document.querySelectorAll('.products-section');

    const switchCategory = (catSlug) => {
      const cleanId = (catSlug || '').replace('#', '');
      if (!cleanId) return;

      // Desktop sidebar active state
      productsNavItems.forEach(item => {
        const href = (item.getAttribute('href') || '').replace('#', '');
        if (href === cleanId) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });

      // Mobile slider active state
      mobileCatBtns.forEach(btn => {
        const btnCat = (btn.getAttribute('data-cat') || '').replace('#', '');
        if (btnCat === cleanId) {
          btn.classList.add('active');
          const container = btn.parentElement;
          if (container) {
            const btnLeft = btn.offsetLeft;
            const btnWidth = btn.offsetWidth;
            const containerWidth = container.offsetWidth;
            container.scrollTo({
              left: btnLeft - (containerWidth / 2) + (btnWidth / 2),
              behavior: 'smooth'
            });
          }
        } else {
          btn.classList.remove('active');
        }
      });

      // Show/Hide section pane
      productSections.forEach(section => {
        if (section.id === cleanId) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });

      history.pushState(null, null, `#${cleanId}`);
    };

    // Listeners
    productsNavItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (item.getAttribute('href') || '').replace('#', '');
        switchCategory(targetId);
      });
    });

    mobileCatBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = (btn.getAttribute('data-cat') || '').replace('#', '');
        switchCategory(targetId);
      });
    });

    // Check URL hash on load
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash && document.getElementById(initialHash)) {
      switchCategory(initialHash);
    }
  }
});
