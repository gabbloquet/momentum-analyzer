from tabulate import tabulate
import pandas as pd
import statistics
import investpy
import datetime
from dateutil.relativedelta import *
from pprint import pprint
import sys


# Informations générales :
interval = 'Daily'
current_date = datetime.date.today()
previous_date = current_date + relativedelta(months=-8)

# EFTs à analyser :
etfs = [
    ('Paris', '50E'),  # HSBC EURO STOXX 50 UCITS (IE00B4K6B022)
    ('Paris', 'AUTP'),  # Lyxor Index Fund - Lyxor STOXX Europe 600 Automobiles & Parts UCITS ETF Acc (LU1834983394)
    ('Paris', 'AWAT'),  # Lyxor PEA World Water UCITS C (FR0011882364)
    ('Paris', 'BNKE'),  # Lyxor UCITS Stoxx Banks C-EUR (LU1829219390)
    ('Paris', 'BRES'),  # Lyxor UCITS Stoxx Europe 600 Basic Resources (LU1834983550)
    ('Paris', 'BX4'),  # Lyxor UCITS CAC 40 Daily Double Short (FR0010411884)
    ('Paris', 'C2U'),  # Amundi ETF Short MSCI USA Daily UCITS ETF (FR0010791194)
    ('Paris', 'C40'),  # Amundi CAC 40 UCITS (LU1681046931)
    ('Paris', 'C4D'),  # Amundi Index Solutions - Amundi CAC 40 UCITS ETF-D (LU1681047079)
    ('Paris', 'C4S'),  # Amundi ETF Short CAC 40 Daily UCITS ETF (FR0010717124)
    ('Paris', 'C50'),  # Amundi Index Solutions - Amundi EURO STOXX 50 UCITS ETF-C EUR (LU1681047236)
    ('Paris', 'C50U'),  # Amundi Euro Stoxx 50 UCITS DR (LU1681047400)
    ('Paris', 'C5S'),  # Amundi ETF Short Euro Stoxx 50 Daily UCITS ETF (FR0010757781)
    ('Paris', 'CACC'),  # Lyxor CAC 40 (DR) UCITS ETF Acc (FR0013380607)
    ('Paris', 'CAC'),  # Lyxor UCITS CAC 40 (DR) D-EUR (FR0007052782)
    ('Paris', 'CACM'),  # Lyxor UCITS CAC Mid 60 D-EUR (FR0011041334)
    ('Paris', 'CAPE'),  # Ossiam Shiller Barclays Cape Europe Sector Value UCITS (LU1079842321)
    ('Paris', 'CC1'),  # Amundi MSCI China UCITS (LU1681043912)
    ('Paris', 'CC1U'),  # Amundi Index Solutions - Amundi MSCI China UCITS ETF-C USD (LU1681044050)
    ('Paris', 'CD5'),  # Amundi Index Solutions - Amundi EURO STOXX 50 UCITS ETF-D EUR (LU1681047319)
    ('Paris', 'CD8'),  # Amundi ETF MSCI EMU High Dividend UCITS ETF C (FR0010717090)
    ('Paris', 'CF1'),  # Amundi ETF MSCI France UCITS (FR0010655704)
    ('Paris', 'CG1'),  # Amundi ETF DAX UCITS ETF DR (FR0010655712)
    ('Paris', 'CHM'),  # Lyxor Index Fund - Lyxor STOXX Europe 600 Chemicals UCITS ETF Acc (LU1834983634)
    ('Paris', 'CL2'),  # Amundi ETF Leveraged MSCI USA Daily UCITS ETF EUR (FR0010755611)
    ('Paris', 'CS1'),  # Amundi ETF MSCI Spain UCITS ETF (FR0010655746)
    ('Paris', 'CU2'),  # Amundi MSCI USA UCITS (LU1681042864)
    ('Paris', 'CU2U'),  # Amundi MSCI USA UCITS USD (LU1681042948)
    ('Paris', 'CW8'),  # Amundi MSCI World UCITS (LU1681043599)
    ('Paris', 'CW8U'),  # Amundi MSCI World UCITS USD (LU1681043672)
    ('Paris', 'DAX'),  # Lyxor UCITS DAX (LU0252633754)
    ('Paris', 'DSP5'),  # Lyxor Daily Double Short S&P 500 UCITS ETF - C-USD (LU1327051279)
    ('Paris', 'E40'),  # BNP Paribas Easy CAC 40® UCITS ETF (FR0010150458)
    ('Paris', 'ECN'),  # BNP Paribas Easy Low Carbon 100 Europe® UCITS ETF (LU1377382368)
    ('Paris', 'EEESE'),  # BNP Paribas Easy S&P 500 UCITS C USD (FR0011550185)
    ('Paris', 'EISR'),  # BNP Paribas Easy MSCI Emerging SRI S-Series 5% Capped UCITS ETF EUR Distribution (LU1659681313)
    ('Paris', 'ELOW'),  # SPDR EURO STOXX Low Volatility UCITS (IE00BFTWP510)
    ('Paris', 'EMUE'),  # SPDR MSCI EMU UCITS (IE00B910VR50)
    ('Paris', 'ESD'),  # BNP Paribas Easy S&P 500 UCITS C (FR0011550177)
    ('Paris', 'ESDD'),  # BNP Paribas Easy S&P 500 UCITS H (FR0011550680)
    ('Paris', 'ESEH'),  # BNP Paribas Easy S&P 500 UCITS Hedge (FR0013041530)
    ('Paris', 'ETBB'),  # BNP Paribas Easy Euro Stoxx 50 UCITS ETF EUR C/D (FR0012740983)
    ('Paris', 'ETDD'),  # BNP Paribas Easy Euro Stoxx 50 UCITS ETF EUR C (FR0012739431)
    ('Paris', 'ETUR'),  # Lyxor PEA DJ Turkey Titans 20 UCITS C (FR0011869395)
    ('Paris', 'ETZ'),  # BNP Paribas Easy Stoxx Europe 600 UCITS C (FR0011550193)
    ('Paris', 'ETZD'),  # BNP Paribas Easy Stoxx Europe 600 UCITS H (FR0011550672)
    ('Paris', 'EUDV'),  # SPDR S&P Euro Dividend Aristocrats UCITS (IE00B5M1WJ87)
    ('Paris', 'EUHD'),  # PowerShares EURO STOXX High Dividend Low Volatility UCITS (IE00BZ4BMM98)
    ('Paris', 'EUMV'),  # Ossiam iSTOXX Europe Minimum Variance NR UCITS 1C (LU0599612842)
    ('Paris', 'EWLD'),  # Lyxor PEA MSCI World UCITS C (FR0011869353)
    ('Paris', 'FINS'),  # Lyxor Index Fund - Lyxor STOXX Europe 600 Financial Services UCITS ETF Acc (LU1834984798)
    ('Paris', 'FMI'),  # Amundi Index Solutions - Amundi FTSE MIB UCITS ETF-C (LU1681037518)
    ('Paris', 'HEU'),  # HSBC MSCI Europe UCITS (IE00B5BD5K76)
    ('Paris', 'HMCX'),  # HSBC FTSE 250 UCITS ETF (IE00B64PTF05)
    ('Paris', 'INDG'),  # Lyxor Index Fund - Lyxor STOXX Europe 600 Industrial Goods & Services UCITS ETF Acc (LU1834987890)
    ('Paris', 'LGRE'),  # Lyxor UCITS FTSE ATHEX Large Cap (FR0010405431)
    ('Paris', 'LLDA'),  # Lyxor UCITS LevDAX (LU0252634307)
    ('Paris', 'LQQ'),  # Lyxor UCITS NASDAQ-100 Daily Leverage (FR0010342592)
    ('Paris', 'LVC'),  # Lyxor UCITS Daily Leverage CAC 40 (FR0010592014)
    ('Paris', 'LVE'),  # Lyxor UCITS Stoxx 50 Daily Leverage (FR0010468983)
    ('Paris', 'LYCST'),  # Lyxor Index Fund - Lyxor STOXX Europe 600 Construction & Materials UCITS ETF Acc (LU1834983808)
    ('Paris', 'LYFOO'),  # Lyxor UCITS Stoxx Europe 600 Food & Beverage (LU1834985845)
    ('Paris', 'LYMIB'),  # Lyxor UCITS FTSE MIB (FR0010010827)
    ('Paris', 'LYXBNK'),  # Lyxor UCITS Stoxx Europe 600 Banks (LU1834983477)
    ('Paris', 'LYXHEA'),  # Lyxor UCITS Stoxx Europe 600 Health Care (LU1834986900)
    ('Paris', 'LYXOIL'),  # Lyxor UCITS Stoxx Europe 600 Oil & Gas (LU1834988278)
    ('Paris', 'LYXPER'),  # Lyxor Index Fund - Lyxor STOXX Europe 600 Personal & Household Goods UCITS ETF Acc (LU1834988351)
    ('Paris', 'LYXTNO'),  # Lyxor UCITS Stoxx Europe 600 Technology (LU1834988518)
    ('Paris', 'LYXTRV'),  # Lyxor Index Fund - Lyxor STOXX Europe 600 Travel & Leisure UCITS ETF Acc (LU1834988781)
    ('Paris', 'LYXUTI'),  # Lyxor UCITS Stoxx Europe 600 Utilities (LU1834988864)
    ('Paris', 'LYYQ'),  # Lyxor Index Fund - Lyxor STOXX Europe 600 Insurance UCITS ETF Acc (LU1834987973)
    ('Paris', 'MDA'),  # Lyxor Index Fund - Lyxor STOXX Europe 600 Media UCITS ETF Acc (LU1834988195)
    ('Paris', 'MEH'),  # Lyxor UCITS FTSE EPRA/NAREIT Developed Europe D-EUR (LU1812091194)
    ('Paris', 'MFDD'),  # Lyxor Euro Stoxx 300 DR UCITS D (LU0908501132)
    ('Paris', 'MFED'),  # Lyxor Euro Stoxx 300 DR UCITS C (LU0908501058)
    ('Paris', 'MFE'),  # Lyxor UCITS MSCI EMU (LU1646360971)
    ('Paris', 'MSED'),  # Lyxor Euro Stoxx 50 DR UCITS C (LU0908501215)
    ('Paris', 'MSE'),  # Lyxor UCITS Stoxx 50 D-EUR (FR0007054358)
    ('Paris', 'MSGW'),  # Lyxor MSCI EMU Growth DR UCITS C EUR (LU1598688189)
    ('Paris', 'MSSM'),  # Lyxor MSCI EMU Small Cap UCITS C EUR (LU1598689153)
    ('Paris', 'MVAU'),  # Lyxor FTSE USA Minimum Variance UCITS C-USD (LU1646362167)
    ('Paris', 'P500H'),  # Amundi ETF PEA S&P 500 UCITS ETF Daily Hedged EUR (FR0013412293)
    ('Paris', 'PAASI'),  # Amundi ETF PEA MSCI Emerging Asia UCITS ETF (FR0013412012)
    ('Paris', 'PAEEM'),  # Amundi ETF PEA MSCI Emerging Markets UCITS ETF (FR0013412020)
    ('Paris', 'PAEJ'),  # Lyxor PEA MSCI AC Asia-Pacific ex Japan UCITS C (FR0011869312)
    ('Paris', 'PAFS'),  # Lyxor PEA South Africa UCITS FTSE JSE Top 40 C (FR0011871144)
    ('Paris', 'PALAT'),  # Amundi ETF PEA MSCI EM Latin America UCITS ETF (FR0013412004)
    ('Paris', 'PANX'),  # Amundi ETF PEA Nasdaq-100 UCITS ETF (FR0013412269)
    ('Paris', 'PASI'),  # Lyxor PEA China Enterprise HSCEI UCITS C (FR0011871078)
    ('Paris', 'PCEU'),  # Amundi ETF PEA MSCI Europe UCITS ETF (FR0013412038)
    ('Paris', 'PDJE'),  # Lyxor PEA Dow Jones Industrial Average UCITS C (FR0011869270)
    ('Paris', 'PE500'),  # Amundi ETF PEA S&P 500 UCITS ETF EUR (FR0013412285)
    ('Paris', 'PEAP'),  # Lyxor PEA PME DR UCITS D (FR0011770775)
    ('Paris', 'PINR'),  # Lyxor PEA MSCI India UCITS C (FR0011869320)
    ('Paris', 'PJPH'),  # Lyxor PEA Japan Topix Daily Hedged UCITS C (FR0011884121)
    ('Paris', 'PJPN'),  # Lyxor PEA Japan Topix UCITS C (FR0011871102)
    ('Paris', 'PKRW'),  # Lyxor PEA MSCI Korea UCITS C (FR0011869338)
    ('Paris', 'PLEM'),  # Lyxor PEA MSCI Emerging Markets UCITS C (FR0011440478)
    ('Paris', 'PMEH'),  # Lyxor UCITS PEA FTSE EPRA/NAREIT Developed Europe C (FR0011869304)
    ('Paris', 'PMEU'),  # Lyxor PEA MSCI Europe UCITS (FR0013400256)
    ('Paris', 'PRIO'),  # Lyxor PEA Brazil Ibovespa UCITS C (FR0011869205)
    ('Paris', 'PRUS'),  # Lyxor PEA Dow Jones Russia GDR UCITS C (FR0011869387)
    ('Paris', 'PSP5'),  # Lyxor PEA S&P 500 UCITS C (FR0011871128)
    ('Paris', 'PSPEF'),  # PowerShares FTSE RAFI Europe UCITS (IE00B23D8X81)
    ('Paris', 'PTPXE'),  # Amundi ETF PEA Japan Topix UCITS ETF EUR (FR0013411980)
    ('Paris', 'PTPXH'),  # Amundi ETF PEA Japan Topix UCITS ETF Daily Hedged EUR (FR0013411998)
    ('Paris', 'PUSA'),  # Lyxor PEA MSCI USA UCITS C (FR0011869346)
    ('Paris', 'PUST'),  # Lyxor PEA Nasdaq 100 UCITS C (FR0011871110)
    ('Paris', 'RS2K'),  # Amundi Index Solutions - Amundi Russell 2000 ETF-C EUR (LU1681038672)
    ('Paris', 'RTA'),  # Lyxor Index Fund - Lyxor STOXX Europe 600 Retail UCITS ETF Acc (LU1834988435)
    ('Paris', 'S6EW'),  # Ossiam STOXX Europe 600 Equal Weight NR UCITS 1C (LU0599613147)
    ('Paris', 'SEL'),  # Lyxor UCITS Stoxx Europe Select Dividend 30 (LU1812092168)
    ('Paris', 'SHC'),  # Lyxor UCITS Daily Short CAC 40 (FR0010591362)
    ('Paris', 'SRIEC'),  # BNP Paribas Easy MSCI Europe SRI Cap (LU1753045332)
    ('Paris', 'TELE'),  # Lyxor UCITS Stoxx Europe 600 Telecommunications (LU1834988609)
    ('Paris', 'UKX'),  # HSBC FTSE 100 UCITS (IE00B42TW061)

    # Ajouts manuels d'ETFs :
    ('Paris', 'PSPH'),  # Lyxor PEA S&P 500 UCITS Couverte en EUR Capi (FR0012740975)
    ('Paris', 'EEMU'),  # BNP Paribas Easy MSCI EMU Ex CW UCITS (LU1291098827)
    ('Paris', 'EEUE'),  # BNP Paribas Easy MSCI Europe ex CW UCITS ETF Cap (LU1291099718)
    ('Xetra', 'EEXU'),  # BNP Paribas Easy MSCI Europe ex UK ex CW UCITS ETF Cap (LU1291100664)
    ('Paris', 'EESM'),  # BNP Paribas Easy MSCI Europe Small Caps SRI S-Series 5% Capped UCITS ETF Capitalisation (LU1291101555)
    ('Paris', 'EMON'),  # BNP Paribas Easy Equity Momentum Europe UCITS ETF Cap (LU1377382012)
    ('Paris', 'EQUA'),  # BNP Paribas Easy Equity Quality Europe UCITS ETF Cap (LU1377382103)
    ('Paris', 'EVAE'),  # BNP Paribas Easy Equity Value Europe UCITS ETF Cap (LU1377382285)
    ('Paris', 'GMRC'),  # Ossiam Global Multi-Asset Risk-Control ETF 1C (LU1446552496)
    ('Paris', 'VLED'),  # BNP Paribas Easy Equity Low Vol Europe UCITS ETF Dis (LU1481201025)
    ('Paris', 'VALD'),  # BNP Paribas Easy EURO STOXX 50 D (LU1481201702)
    ('Xetra', 'ITSM'),  # BNP Paribas Easy iSTOXX® MUTB Japan Quality 150 UCITS ETF H EUR Cap (LU1547514676)
    ('Xetra', 'EDEU'),  # BNP Paribas Easy Equity Dividend Europe UCITS ETF Capitalisation (LU1615090864)
    ('Paris', 'EMIS'),  # BNP Paribas Easy MSCI Emerging SRI S-Series 5% Capped UCITS ETF EUR Capitalisation (LU1659681230)
    ('Xetra', 'LES2'),  # Lyxor MSCI EMU ESG Trend Leaders (DR) UCITS ETF - Acc (LU1792117340)
    ('Paris', 'MUSRI'),  # BNP Paribas Easy MSCI EMU SRI 5% Capped UCITS ETF Cap (LU1953137681)
    ('Paris', 'EPAB'),  # Lyxor S&P Eurozone Paris-Aligned Climate (EU PAB) (DR) UCITS ETF - Acc (LU2195226068)

    # Autres ETFs :
    #  LU1291098314
    #  LU1646361276
    #  LU1681038839
    #  LU2059756325
    #  LU2182388582
]

funds = [
    #('france', '0P0001FEWV'),  # Lyxor Pea Obligations D'état Euro Ucits Etf Acc (FR0013346681)
]

# Initialisation du dataframe :
columns = [
    'type', 'ticker', 'name',
    'date_0', 'val_0',
    'date_1', 'val_1', 'perf_1',
    'date_3', 'val_3', 'perf_3',
    'date_6', 'val_6', 'perf_6',
    'perf']
df_stat = pd.DataFrame(columns=columns)

# Calcul des dates précédentes :
date_1 = current_date + relativedelta(months=-1)
date_3 = current_date + relativedelta(months=-3)
date_6 = current_date + relativedelta(months=-6)

# Formatage des dates :
from_date = previous_date.strftime("%d/%m/%Y")
to_date = current_date.strftime("%d/%m/%Y")
date_0 = current_date.strftime("%Y-%m-%d")
date_1 = date_1.strftime("%Y-%m-%d")
date_3 = date_3.strftime("%Y-%m-%d")
date_6 = date_6.strftime("%Y-%m-%d")


# [ETFS] Récupération du ticker :
def get_name_etf(stock_exchange, ticker):
    df = investpy.search_etfs(by='symbol', value=f"^{ticker}$")
    d = df.query(f"stock_exchange == '{stock_exchange}'")
    return d["country"].iloc[0], d["name"].iloc[0]


# [ETFS] Récupération des données historisées :
def get_historical_data_etf(name, country, stock_exchange):
    return investpy.get_etf_historical_data(
        etf=name,
        country=country,
        stock_exchange=stock_exchange,
        from_date=from_date,
        to_date=to_date,
        interval=interval)


# [FONDS] Récupération du ticker :
def get_name_fund(country, ticker):
    df = investpy.search_funds(by='symbol', value=f"^{ticker}$")
    d = df.query(f"country == '{country}'")
    return d["country"].iloc[0], d["name"].iloc[0]


# [FONDS] Récupération des données historisées :
def get_historical_data_fund(name, country):
    return investpy.get_fund_historical_data(
        fund=name,
        country=country,
        from_date=from_date,
        to_date=to_date,
        interval=interval)


# Dernière date du mois présent dans le dataframe :
def get_last_date(df, date):
    df_max = df.query(f"Date <= '{date}'").sort_values(by='Date', ascending=False)
    return df_max.index[0]


# Calcul de la perf DMA :
def calculate_perf_dma(df, t, ticker, name):
    print(f"  -> Date : {date_0} - {date_1} - {date_3} - {date_6}")
    last_date_0 = get_last_date(df, date_0)
    last_date_1 = get_last_date(df, date_1)
    last_date_3 = get_last_date(df, date_3)
    last_date_6 = get_last_date(df, date_6)
    print(f"  -> Date : {last_date_0} - {last_date_1} - {last_date_3} - {last_date_6}")

    val_0 = df['Close'].loc[last_date_0]
    val_1 = df['Close'].loc[last_date_1]
    val_3 = df['Close'].loc[last_date_3]
    val_6 = df['Close'].loc[last_date_6]

    perf_1 = 100 * ((val_0/val_1) - 1)
    perf_3 = 100 * ((val_0/val_3) - 1)
    perf_6 = 100 * ((val_0/val_6) - 1)
    perf_t = statistics.mean([perf_1, perf_3, perf_6])

    return pd.DataFrame([[
        t, ticker, name,
        date_0, val_0,
        date_1, val_1, perf_1,
        date_3, val_3, perf_3,
        date_6, val_6, perf_6,
        perf_t
    ]], columns=columns)


# Traitement pour chaque ETF :
for stock_exchange, ticker in etfs:
    country, name = get_name_etf(stock_exchange, ticker)
    print(f"{country} | {stock_exchange} | {ticker} | {name}")
    df = get_historical_data_etf(name, country, stock_exchange)
    df_stat = df_stat.append(calculate_perf_dma(df, 'etf', ticker, name))

# Traitement pour chaque fond :
for country, ticker in funds:
    country, name = get_name_fund(country, ticker)
    print(f"{country} | {country} | {ticker} | {name}")
    df = get_historical_data_fund(name, country)
    df_stat = df_stat.append(calculate_perf_dma(df, 'fund', ticker, name))
print(tabulate(df_stat.sort_values(by='perf', ascending=False), columns, tablefmt="psql"))

