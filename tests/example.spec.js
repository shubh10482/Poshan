import { test, expect } from '@playwright/test';
import { randomFill, randomInt } from 'crypto';

test('test', async ({ page }) => {
  const awcOptions = ["ACHHAIPUR", "ALAWALPUR", "ARJUNPUR", "ARSARA I", "ARSARA II", "BADANPUR Chitayan", "BADANPUR Kamalpur", "BADEPUR", "BAGHAUNI", "BAIRAGPUR", "BAKHATPUR", "BALLAMPUR Saman", "BAMHNIPUR Saman", "BARAH", "BARIHA", "BARIHAR Saman", "BARUA Negawan Khiriya", "BARUA NADI", "BARUAA CHAMAR MINI Legaon", "BASAIT I", "BASAIT II", "BASAIT III", "BASANTPUR", "BHAGAUTI MINI Kanhupur", "BHAISHPUR MINI Ratheh", "BHARATPUR", "BHAWANIGARH", "BHEEKHPURA MINI bUdhauli", "BHITARA MINI Farenji", "BIRTIYA I", "BIRTIYA II", "BUDAKHEDA Saman", "BUDAKHEDA Saman", "BUDHOLI", "Bansarmau Hirauli", "Bhadehi I", "Bhadehi III", "CHANDA Ratheh", "CHANDARPUR", "CHATURIPUR", "CHAURAIPUR", "CHITAIN", "Chaturipur Farenji", "DADAUS 1", "DADAUS II", "DADIPUR MINI", "DANDEHAR Saman", "DAUDPUR", "DAWAH Rathe", "DEVPURA", "DHAKROI", "DHAMIYAPUR Kithah", "DHEERPUR", "DIVANPUR", "DUMHAR", "FARAINJI 3", "FARENGI 2", "FARENJI I", "GANGDASPUR", "GAPKAPUR Shamsherganj", "GHUTARA I", "GHUTARA II", "GOKULPUR", "HADIRA Kumhol", "HARIPUR", "HARRAJPUR", "HARRAJPUR MINI", "HIRAULI", "HUSENPUR", "HUSENPUR", "Harchandpur", "ILLABANS IV", "ILLAHABAS III", "ILLAHBAS I", "ILLAHBAS II", "INDARPUR II", "INDERPUR I", "JAKHA", "JATPURA I", "JATPURA II", "JATPURA III", "JAVAPUR I", "KACHPURA Shamsherganj", "KAITHOLI I", "KAITHOLI II", "KAITHPUR", "KAMALNER", "KAMALPUR", "KANHUPUR I", "KANHUPUR II", "KARNAI Dakroy", "KATRA I Saman", "KATRA II Saman", "KATTRA MINI", "KESHOPUR", "KHADDARA", "KHARGPUR", "KHARGPUR", "KHIDARPUR", "KHIRIYA", "KHUOJAPUR BARIHA", "KISHANPUR BARIHA", "KODAR", "KRAPALPUR Chauraypur", "KUDRA Farenji", "KUDRIYA Saman", "KUMHOL I", "KUMHOL II", "KUNDANPUR Uncha islamabad", "KURSANDA I", "KURSANDA II", "KUSHALPUR BARIHA", "KUTUPUR I", "KUTUPUR II", "Kudra", "LAIGAON", "LALPUR", "LATHUGAR Kumhol", "LAXMANPUR", "LEGAON", "LUKUTPURA", "Laigawon 1", "Legawn 2", "MACHAVAR Shamsherganj", "MADHNAMAU MINI Kumhol", "MADHUPURI MINI ILLAWAS", "MADNAPUR", "MAHIGAVAN I", "MAHIGAVAN II", "MAHMADPUR Sathidawan", "MAHOLI Shamsherganj", "MAKRANDPUR Chauraypur", "MANIGAON I", "MANIGAON II", "MANPURA Ramagar", "MARIYAR MINI Saman", "MEERPUR MINI Dakroy", "MIDIYA MINI Badepur", "MUDAUSI", "MUKUTPUR", "NAGLA AHIR Dakroy", "NAGLA AKHE", "NAGLA ANTI Daudpur", "NAGLA BALSINGH Mini", "NAGLA BANE Shamsherganj", "NAGLA BHAJJ", "NAGLA BHAVANI MINI Negawan Khiriya", "NAGLA BIKE Chitayan", "NAGLA Bakhti Budhauli", "NAGLA DALAF Chauraipur", "NAGLA DEVI Gulriyapur", "NAGLA DHAU MINI ILLwas", "NAGLA DINI Kithah", "NAGLA GANGU Mini", "NAGLA GAVE", "NAGLA HIMMATPUR Farenji", "NAGLA INDE MINI Basait", "NAGLA MAHOLI", "NAGLA PRITAM Mini Kumhol", "NAGLA RAY Chitayan", "NAGLA VALLE", "NAGRIYA Chitayan", "NAGTHARA", "NAIGAVAN ( Khiriya)", "NAIGAVAN KHIRIYA Saman", "NANDPUR", "NASEERPUR MINI Farenji", "Nagla Dugai Hirauli", "Nagla beel", "PADAMPUR", "PAHADPUR I", "PAHADPUR II", "PAHADPUR Saman", "PARUSHRAMPUR", "PUWAYA MINI Badepur", "RAIPURA Saman", "RAMNAGAR", "RAMNAGAR", "RAMPURA MINI Saman", "RAMPURA MINI. MANIGAON", "RANGPUR", "RATEH II", "RATHEH I", "RATHEH III", "RATIBHANPUR", "RAVIDASPUR", "RAYHAR MINI", "ROOPPUR MINI Saman", "SABHAPUR Bariha", "SAKATPUR", "SAKRA I", "SAKRA II", "SAKRAMPUR", "SAMADPUR MINI Sighpur", "SAMAN", "SAMSHERGANJ I", "SAMSHERGANJ II", "SANTPUR Ramnagar", "SATHIGANWA", "SAUNASI", "SHAIDPUR Gulriyapur", "SHIVPUR mini Ratibhanpur", "SINGHPUR I", "SINGHPUR II", "SINGNI", "SOBANPUR MINI Kamalner", "SULTANPUR", "TARIHA Bariha", "UMRAHAAR Kumhol", "UNCHA ESLAMABAD I", "UNCHA ESLAMABAD II", "VANKHANDI Chitayan", "VIKRAMPUR MINI Saman", "bhadehi II"];
  
  const dates = ['2023-09-19', '2023-09-20', '2023-09-21', '2023-09-22', '2023-09-23', '2023-09-24']

  await page.goto('https://poshanabhiyaan.gov.in/login');

  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('mow&cd-916606');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('mow&cd-916606');
  await page.getByRole('button', { name: 'Login' }).click();

  for (let i = 0; i < awcOptions.length; i++) {
    await page.locator('select[name="SelectTheme"]').click();
    await page.locator('select[name="SelectTheme"]').selectOption('3');

    await page.locator('select[name="SelectLevel"]').click();
    await page.locator('select[name="SelectLevel"]').selectOption('5');

    const awcElement = page.locator('select[name="awc_center"]')
    await awcElement.click();
    await awcElement.selectOption({ label: awcOptions[i] });
    console.log(`Selected option: ${i} ${awcOptions[i]}`);

    await page.locator('select[name="SelectActivity"]').click();
    await page.locator('select[name="SelectActivity"]').selectOption('14');

    await page.locator('input[name="SelectDateFrom"]').fill('2023-09-19');
    await page.locator('input[name="SelectDateTo"]').fill('2023-09-19');

    await page.locator('input[name="CountAdultMale"]').click();
    await page.locator('input[name="CountAdultMale"]').fill(randomInt(2, 5).toString());

    await page.locator('input[name="CountAdultFemale"]').click();
    await page.locator('input[name="CountAdultFemale"]').fill(randomInt(2, 5).toString());

    await page.locator('input[name="CountChildMale"]').click();
    await page.locator('input[name="CountChildMale"]').fill(randomInt(2, 5).toString());

    await page.locator('input[name="CountChildFemale"]').click();
    await page.locator('input[name="CountChildFemale"]').fill(randomInt(2, 5).toString());

    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForTimeout(5000);
  }
});