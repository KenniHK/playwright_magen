import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.43.6.180:55209/magenta/login');
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('pg1');
  await page.getByRole('textbox', { name: 'User ID' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('bcabca');
  await page.getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('a').filter({ hasText: 'Pengajuan Merchant' }).nth(1).click();
  await page.goto('http://10.43.6.180:55209/magenta/home');
  await page.locator('a').filter({ hasText: 'Pengajuan Merchant' }).nth(1).click();
  await page.goto('http://10.43.6.180:55209/magenta/home');
  await page.locator('a').filter({ hasText: 'Pengajuan Merchant' }).nth(1).click();
  await page.locator('iframe').contentFrame().getByRole('link', { name: ' Daftar Sebagai Rekening Non' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Pemilik' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Pemilik' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Pemilik' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Pemilik' }).fill('Play Wright');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'No. KTP (16 digit)' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'No. KTP (16 digit)' }).fill('1234567812345678');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Paspor' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Paspor' }).fill('12345678');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'No. Rekening' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'No. Rekening' }).fill('1223344556');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Bank' }).click();
  await page.locator('iframe').contentFrame().getByRole('cell', { name: '0520098' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Pilih' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: '' }).click();
  await page.locator('iframe').contentFrame().getByRole('cell', { name: '4' }).first().click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Alamat Identitas' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Alamat Identitas' }).fill('Jalan Jalanin Dulu');
  await page.locator('iframe').contentFrame().getByRole('cell', { name: 'RW' }).locator('label').click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'RT' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'RT' }).fill('002');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'RT' }).press('Tab');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'RW' }).fill('000');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Kelurahan' }).click();
  await page.locator('iframe').contentFrame().getByRole('row', { name: '10110 GAMBIR GAMBIR JAKARTA' }).getByRole('cell').nth(1).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Pilih' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'HP', exact: true }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'HP', exact: true }).fill('123432342546');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Telepon / HP' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Telepon / HP' }).fill('12332432455');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Contoh: melisa@bca.co.id,' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Contoh: melisa@bca.co.id,' }).fill('playplay@gmail.com');
  await page.locator('iframe').contentFrame().locator('#ember703 i').click();
  await page.locator('iframe').contentFrame().locator('#ember490').getByRole('button', { name: 'Lanjut ' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Usaha' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Usaha' }).fill('Usahain');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Alamat 1' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Alamat 1' }).fill('Jl jalanin dulu');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Alamat 2' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Alamat 2' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Alamat 2' }).fill('Jl aspal baru');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Kelurahan' }).click();
  await page.locator('iframe').contentFrame().getByRole('row', { name: '10110 GAMBIR GAMBIR JAKARTA' }).getByRole('cell').nth(1).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Pilih' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Jenis Usaha' }).click();
  await page.locator('iframe').contentFrame().getByRole('cell', { name: '(^.^)' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Pilih' }).click();
  await page.locator('iframe').contentFrame().locator('#ember916 i').click();

  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'HP', exact: true }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'HP', exact: true }).fill('123123213123');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Telepon / HP' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'HP', exact: true }).fill('1231232131231');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Telepon / HP' }).fill('2321312323123');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'example: email@gmail.com' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'example: email@gmail.com' }).fill('usahain@gmail.com');
  await page.locator('iframe').contentFrame().locator('#ember490').getByRole('button', { name: 'Lanjut ' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: ' Tambah Outlet' }).click();

  const frame = page.frameLocator('iframe');
  await frame.locator('label', { hasText: 'Toko' })
  .locator('i.fas.fa-check')
  .click();

  const options = await frame.locator('select option').evaluateAll( els =>
    els.map(el => ({
      text: el.textContent?.trim(),
      value: (el as HTMLOptionElement).value,
    }))
    );
    console.log(options);

  const label = frame.locator('label', { hasText: 'Jenis Usaha' });
  const dropdown = label.locator('..').locator('select');
  await dropdown.selectOption('294');

  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Outlet', exact: true }).fill('Outlet');
 
  await frame.locator('label', { hasText: 'Alamat sesuai dengan data usaha' }).click();

  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Telepon / HP' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Telepon / HP' }).fill('082746295462');
  
  await frame.locator('label', { hasText: 'Email sesuai dengan data usaha' }).click();

  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Kode Settle' }).click();
  await page.locator('iframe').contentFrame().getByRole('cell', { name: '0164' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Pilih' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Kode Officer' }).click();
  await page.locator('iframe').contentFrame().getByRole('cell', { name: 'yuyuyu' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Pilih' }).click();


  await frame.locator('label:has-text("Lokasi Usaha")')
  .locator('..')
  .locator('select')
  .first()
  .selectOption('4');

  
  const labelKasir = frame.locator('label:has-text("Jumlah Counter Kasir")');
  const inputKasir = labelKasir.locator('..').locator('input[type="text"]');

  await inputKasir.fill('2');


  await frame.locator('label:has-text("Posisi Lokasi Usaha")')
  .locator('..')
  .locator('select')
  .first()
  .selectOption('8');

  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Kode Mall/Area Perdagangan' }).click();
  await page.locator('iframe').contentFrame().getByRole('cell', { name: '5228' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Pilih' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Kode Referal' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Kode Referal' }).fill('1112');
  
  await frame.locator('label:has-text("Status Kepemilikan Tempat Usaha")')
  .locator('..')
  .locator('select')
  .first()
  .selectOption('1');


  await frame.locator('button.datepickerbutton').click();

  await frame.getByPlaceholder('Tgl. Berdiri').fill('05/08/2025');

  await frame.locator('label:has-text("Kepemilikan EDC Bank Lain")')
  .locator('..')
  .locator('span.text', { hasText: 'Tidak' })
  .click();

  
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Termurah (Rp/pcs)' }).fill('1');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Termahal (Rp/pcs)' }).fill('2');
  
  await frame.locator('label:has-text("Kriteria Khusus")')
  .locator('..')
  .locator('span.text', { hasText: 'Tidak' })
  .click();

  
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Omset Perbulan' }).fill('3');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Rata-rata Nominal/Transaksi' }).fill('4');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Memo' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Memo' }).fill('NEMO');

  await frame.locator('label:has-text("Fasilitas")')
  .locator('..')
  .locator('span.text', { hasText: 'Debit' })
  .click();

  await frame.locator('label:has-text("Fitur")')
  .locator('..')
  .locator('span.text', { hasText: 'EAL' })
  .click();

  await frame.locator('label:has-text("Fitur")')
  .locator('..')
  .locator('span.text', { hasText: 'MPN' })
  .click();

  await frame.locator('label:has-text("Rekening Penampungan Debit")')
  .locator('..')
  .locator('span.text', { hasText: 'Rekening Bank Lain' })
  .click();

  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'No. Rekening' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'No. Rekening' }).fill('1212121212');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Nasabah' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Nasabah' }).fill('Nas Abah');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Bank' }).click();
  await page.locator('iframe').contentFrame().getByRole('cell', { name: 'AGRIS SUNGKONO,SBY' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Pilih' }).click();
  await frame.locator('label:has-text("Hubungan dengan Pemilik")')
  .locator('..')
  .locator('select')
  .first()
  .selectOption('Suami');

  await frame.locator('label:has-text("Pilih Tipe Mesin")')
  .locator('..')
  .locator('select')
  .first()
  .selectOption('EDC');

  await frame.locator('label:has-text("Jenis Koneksi")')
  .locator('..')
  .locator('select')
  .first()
  .selectOption('2');

  await frame.getByPlaceholder('Jml').fill('1');
  await frame.getByRole('button', { name: 'Terminal' }).click();


  await frame.getByPlaceholder('Tgl. Pemasangan').click();
  await frame.locator ('.day', { hasText: '15' }).click();
  const tanggal = await frame.getByPlaceholder('Tgl. Pemasangan').inputValue();
  console.log(tanggal);


  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Kode Cabang Pemasangan' }).click();
  await page.locator('iframe').contentFrame().getByRole('cell', { name: 'ALAM SUTERA' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Pilih' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'PIC Outlet' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'PIC Outlet' }).fill('PICI');

  await frame.locator('input[type="text"][placeholder="Telepon / HP"]').nth(1).fill('1231231231');

    await frame.locator('label:has-text("Alamat Pemasangan")')
    .locator('..')
    .locator('span.text', { hasText: 'Alamat Outlet' })
    .click();

  await page.locator('iframe').contentFrame().locator('#ember490').getByRole('button', { name: 'Lanjut ' }).click();


  await frame.locator('label:has-text("IDENTITAS NASABAH")')
  .locator('..')
  .locator('span.text', { hasText: 'Sedang' })
  .click();

  await frame.locator('label:has-text("PROFIL NASABAH")')
  .locator('..')
  .locator('span.text', { hasText: 'Sedang' })
  .click();

  await frame.locator('label:has-text("KEGIATAN USAHA")')
  .locator('..')
  .locator('span.text', { hasText: 'Sedang' })
  .click();

  await frame.locator('label:has-text("REKENING (KHUSUS MERCHANT)")')
  .locator('..')
  .locator('span.text', { hasText: 'Sedang' })
  .click();


  await frame.locator('label:has-text("Informasi Negatif Lainnya")')
  .locator('..')
  .locator('textarea')
  .fill("aduh")


  const count = await frame
  .locator('div.form-group.has-error')
  .locator('div.radio', { hasText: 'Sedang' })
  .locator('input[type="radio"]')
  .count();

  console.log('Jumlah input radio Sedang:', count);

  const countSpan = await frame.locator('span.text', { hasText: 'Sedang' }).count();
  console.log('Jumlah span Sedang:', countSpan);

  await frame
  .locator('span.text', { hasText: 'Sedang' })
  .nth(4)
  .click();

  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Lampirkan File' }).click();

  await frame.locator('input[type="file"]').setInputFiles('admin request.jpg');


  await frame.locator('label:has-text("Dokumen")')
  .locator('..')
  .locator('span.text', { hasText: 'FDM' })
  .click();

  await frame.locator('label:has-text("Dokumen")')
  .locator('..')
  .locator('span.text', { hasText: 'KTP/KITAS/KITAP Pemilik' })
  .click();

  await frame.locator('label:has-text("Dokumen")')
  .locator('..')
  .locator('span.text', { hasText: 'Dokumen' })
  .click();

  await page.locator('iframe').contentFrame().locator('#ember490').getByRole('button', { name: 'Lanjut ' }).click();

  await frame.locator('label:has-text("Rekomendasi Cabang")')
  .locator('..')
  .locator('span.text', { hasText: 'Tidak' })
  .click();

  await frame.locator('label:has-text("Flag Pengajuan")')
  .locator('..')
  .locator('span.text', { hasText: 'Reagreement' })
  .click();

    
  await frame
  .locator('div.input-group', { hasText: ('Nama') })
  .locator('input[type="text"]')
  .fill('Milla');

  await frame
  .locator('div.input-group', { hasText: ('Jabatan') })
  .locator('input[type="text"]')
  .fill('CS go'); 

  await frame.locator('input[placeholder="Tanggal"]').click();
  await frame.getByRole('cell', { name: '5', exact: true  }).nth(0).click();

  await frame
  .locator('div.form-group', { hasText: ('No Tracking ID') })
  .locator('input[type="text"]')
  .fill('1'); 

  await frame
  .locator('div.form-group', { hasText: ('No ID Lapor') })
  .locator('input[type="text"]')
  .fill('2'); 

  await frame.locator('label:has-text("Catatan Pengajuan / Dokumen")')
  .locator('..')
  .locator('textarea')
  .fill("aduh aduh")

  await frame.locator('label:has-text("Catatan Pemasangan / Penarikan")')
  .locator('..')
  .locator('textarea')
  .fill("aduh aduh")

  await frame.locator('label:has-text("Pengajuan Urgent")')
  .locator('..')
  .locator('span.text', { hasText: 'Tidak' })
  .click();

  await page.locator('iframe').contentFrame().locator('label').filter({ hasText: 'Saya sudah melakukan' }).click();

  await page.locator('iframe').contentFrame().getByRole('button', { name: ' Submit' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Oke' }).click();
  await page.locator('iframe').contentFrame().locator('#table').click();

});