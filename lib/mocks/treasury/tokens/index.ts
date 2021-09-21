import { BondDetail, VoteDetail } from 'features/types';
import { TransactionCardInput } from 'lib/types/treasury';
import { Token } from 'types/token';
import { ProposalType } from 'types/proposal';
import { ExpandedProposalCardProps } from 'components/cards/expanded-proposal-card';

const generateTokens = () => {
  const tokens = [];

  for (let i = 0; i < 50; i += 1) {
    tokens.push({
      id: `${i}`,
      tokenName: Token.NEAR,
      tokensBalance: i,
      totalValue: 3 * i,
      voteWeight: i,
      href: ''
    });
  }

  return tokens;
};

export const TOKENS_DATA = generateTokens();

export const PROPOSAL_DATA: Omit<
  ExpandedProposalCardProps,
  'children' | 'onClose' | 'onDislike' | 'onLike' | 'isOpen' | 'onRemove'
> = {
  status: 'InProgress',
  type: ProposalType.Transfer,
  title: 'meowzers.sputnikdao.near',
  name: 'jonathan.near',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis eleifend habitant laoreet ornare vitae consequat. Potenti ut urna, ultricies elit nam. Feugiat porta elit ultricies eu mollis. Faucibus mauris faucibus aliquam non. ',
  link: 'https://example.com',
  linkTitle: 'reddit.com/group',
  likes: 50,
  dislikes: 134,
  liked: false,
  dismisses: 0,
  dismissed: false,
  disliked: false,
  endsAt: '2021-08-12T12:00:52Z',
  daoDetails: {
    name: 'my awesome dao',
    logo: ''
  },
  proposalId: 1,
  daoId: 'my-awesome-dao'
};

export const TRANSACTIONS_DATA: TransactionCardInput[] = [
  {
    transactionId: '1',
    type: 'Deposit',
    tokenName: Token.NEAR,
    tokensBalance: 2321,
    date: new Date().toISOString(),
    accountName: 'verylongnamegoeshere.near'
  },
  {
    transactionId: '2',
    type: 'Deposit',
    tokenName: Token.NEAR,
    tokensBalance: 223,
    date: new Date().toISOString(),
    accountName: 'verylongnamegoeshere.near'
  },
  {
    transactionId: '3',
    type: 'Deposit',
    tokenName: Token.NEAR,
    tokensBalance: 323,
    date: new Date().toISOString(),
    accountName: 'verylongnamegoeshere.near'
  },
  {
    transactionId: '4',
    type: 'Withdraw',
    tokenName: Token.NEAR,
    tokensBalance: 223,
    date: new Date().toISOString(),
    accountName: 'verylongnamegoeshere.near'
  },
  {
    transactionId: '5',
    type: 'Withdraw',
    tokenName: Token.NEAR,
    tokensBalance: 223,
    date: new Date().toISOString(),
    accountName: 'test.near'
  }
];

export const CHART_DATA = [
  { balance: 420.8090079101299, timestamp: 15489720000 },
  { balance: 759.3906744348766, timestamp: 15489828000 },
  { balance: 932.504014057706, timestamp: 154899360000 },
  { balance: 314.6182801718462, timestamp: 15490044000 },
  { balance: 407.4245788168431, timestamp: 15490152000 },
  { balance: 31.81250553629389, timestamp: 15490260000 },
  { balance: 877.4474009141197, timestamp: 15490368000 },
  { balance: 671.6966625266336, timestamp: 15490476000 },
  { balance: 319.5100813348357, timestamp: 15490584000 },
  { balance: 47.85194338166665, timestamp: 15490692000 },
  { balance: 290.3906465009203, timestamp: 15490800000 },
  { balance: 0, timestamp: 1549090800000 },
  { balance: 572.7633815473246, timestamp: 15491016000 },
  { balance: 0, timestamp: 1549112400000 },
  { balance: 765.2511082570675, timestamp: 15491232000 },
  { balance: 458.77950860260876, timestamp: 1549134000 },
  { balance: 0, timestamp: 1549144800000 },
  { balance: 803.6923009137356, timestamp: 15491556000 },
  { balance: 723.5229952823789, timestamp: 15491664000 },
  { balance: 929.3736005948073, timestamp: 15491772000 },
  { balance: 0, timestamp: 1549188000000 },
  { balance: 0, timestamp: 1549198800000 },
  { balance: 964.3334503763781, timestamp: 15492096000 },
  { balance: 815.8106776713487, timestamp: 15492204000 },
  { balance: 0, timestamp: 1549231200000 },
  { balance: 539.036462032714, timestamp: 154924200000 },
  { balance: 268.1512247302975, timestamp: 15492528000 },
  { balance: 564.8069529490207, timestamp: 15492636000 },
  { balance: 187.90186574982192, timestamp: 1549274400 },
  { balance: 915.1288133465165, timestamp: 15492852000 },
  { balance: 248.35723038572243, timestamp: 1549296000 },
  { balance: 348.28521593134343, timestamp: 1549306800 },
  { balance: 130.81141389793171, timestamp: 1549317600 },
  { balance: 256.4196350978862, timestamp: 15493284000 },
  { balance: 174.09513442497237, timestamp: 1549339200 },
  { balance: 0, timestamp: 1549350000000 },
  { balance: 757.0650283861131, timestamp: 15493608000 },
  { balance: 999.0108861942948, timestamp: 15493716000 },
  { balance: 966.7880329629095, timestamp: 15493824000 },
  { balance: 0, timestamp: 1549393200000 },
  { balance: 377.57786042022957, timestamp: 1549404000 },
  { balance: 943.0339616330751, timestamp: 15494148000 },
  { balance: 646.5316730170607, timestamp: 15494256000 },
  { balance: 171.5419529768265, timestamp: 15494364000 },
  { balance: 23.277549562020326, timestamp: 1549447200 },
  { balance: 536.2714011876304, timestamp: 15494580000 },
  { balance: 847.5761489132257, timestamp: 15494688000 },
  { balance: 791.1388411643261, timestamp: 15494796000 },
  { balance: 0, timestamp: 1549490400000 },
  { balance: 766.8162443439519, timestamp: 15495012000 },
  { balance: 79.56091599984316, timestamp: 15495120000 },
  { balance: 606.6138852714338, timestamp: 15495228000 },
  { balance: 671.3514590451804, timestamp: 15495336000 },
  { balance: 122.24450598818515, timestamp: 1549544400 },
  { balance: 822.1822174466951, timestamp: 15495552000 },
  { balance: 932.3848167518274, timestamp: 15495660000 },
  { balance: 845.2405798698821, timestamp: 15495768000 },
  { balance: 192.57997231956426, timestamp: 1549587600 },
  { balance: 593.3091345112114, timestamp: 15495984000 },
  { balance: 34.46719333163739, timestamp: 15496092000 },
  { balance: 729.3987442261682, timestamp: 15496200000 },
  { balance: 0, timestamp: 1549630800000 },
  { balance: 954.1810714772379, timestamp: 15496416000 },
  { balance: 115.42580903518918, timestamp: 1549652400 },
  { balance: 485.94475349276655, timestamp: 1549663200 },
  { balance: 173.10229013256185, timestamp: 1549674000 },
  { balance: 164.58932039800024, timestamp: 1549684800 },
  { balance: 353.18963104374126, timestamp: 1549695600 },
  { balance: 431.47448726777714, timestamp: 1549706400 },
  { balance: 791.1582079245084, timestamp: 15497172000 },
  { balance: 615.9063574299719, timestamp: 15497280000 },
  { balance: 864.9889945163034, timestamp: 15497388000 },
  { balance: 216.89219415662174, timestamp: 1549749600 },
  { balance: 727.865546639394, timestamp: 154976040000 },
  { balance: 51.96146261816792, timestamp: 15497712000 },
  { balance: 413.08842987610683, timestamp: 1549782000 },
  { balance: 826.9338805818322, timestamp: 15497928000 },
  { balance: 688.9117674160279, timestamp: 15498036000 },
  { balance: 882.2066805224983, timestamp: 15498144000 },
  { balance: 366.2861492044918, timestamp: 15498252000 },
  { balance: 63.01190852386718, timestamp: 15498360000 },
  { balance: 492.1281838578675, timestamp: 15498468000 },
  { balance: 748.9159637875151, timestamp: 15498576000 },
  { balance: 516.91290308409, timestamp: 1549868400000 },
  { balance: 476.9275714882693, timestamp: 15498792000 },
  { balance: 240.81328059417052, timestamp: 1549890000 },
  { balance: 0, timestamp: 1549900800000 },
  { balance: 672.3563591349601, timestamp: 15499116000 },
  { balance: 237.59843770342414, timestamp: 1549922400 },
  { balance: 645.1456003364722, timestamp: 15499332000 },
  { balance: 84.96577000308858, timestamp: 15499440000 },
  { balance: 443.8012812359371, timestamp: 15499548000 },
  { balance: 619.9084894103395, timestamp: 15499656000 },
  { balance: 537.2512289309575, timestamp: 15499764000 },
  { balance: 298.5382143779332, timestamp: 15499872000 },
  { balance: 571.2659657826753, timestamp: 15499980000 },
  { balance: 496.21181473882746, timestamp: 1550008800 },
  { balance: 370.4776641381564, timestamp: 15500196000 },
  { balance: 37.2753064951834, timestamp: 155003040000 },
  { balance: 609.8404094106955, timestamp: 15500412000 },
  { balance: 508.88631360420544, timestamp: 1550052000 },
  { balance: 864.1478517243091, timestamp: 15500628000 },
  { balance: 368.5262633924902, timestamp: 15500736000 },
  { balance: 850.739483197075, timestamp: 155008440000 },
  { balance: 0, timestamp: 1550095200000 },
  { balance: 827.2542415154804, timestamp: 15501060000 },
  { balance: 283.6518089518487, timestamp: 15501168000 },
  { balance: 285.15703415467163, timestamp: 1550127600 },
  { balance: 249.95712289834125, timestamp: 1550138400 },
  { balance: 803.4011720893972, timestamp: 15501492000 },
  { balance: 24.393075207128632, timestamp: 1550160000 },
  { balance: 429.25581916365485, timestamp: 1550170800 },
  { balance: 724.4837718628188, timestamp: 15501816000 },
  { balance: 0, timestamp: 1550192400000 },
  { balance: 0, timestamp: 1550203200000 },
  { balance: 285.4312003452923, timestamp: 15502140000 },
  { balance: 590.4268946531304, timestamp: 15502248000 },
  { balance: 653.2279890061199, timestamp: 15502356000 },
  { balance: 471.99938026961877, timestamp: 1550246400 },
  { balance: 350.10336405803844, timestamp: 1550257200 },
  { balance: 793.473603802104, timestamp: 155026800000 },
  { balance: 60.97000952786291, timestamp: 15502788000 },
  { balance: 605.8053569328605, timestamp: 15502896000 },
  { balance: 951.289416338853, timestamp: 155030040000 },
  { balance: 76.81677908676443, timestamp: 15503112000 },
  { balance: 938.8105669794737, timestamp: 15503220000 },
  { balance: 388.1644059405294, timestamp: 15503328000 },
  { balance: 994.269131712195, timestamp: 155034360000 },
  { balance: 0, timestamp: 1550354400000 },
  { balance: 52.39277518525043, timestamp: 15503652000 },
  { balance: 514.6096713319884, timestamp: 15503760000 },
  { balance: 41.40945860565503, timestamp: 15503868000 },
  { balance: 552.2977363227308, timestamp: 15503976000 },
  { balance: 0, timestamp: 1550408400000 },
  { balance: 784.065567763357, timestamp: 155041920000 },
  { balance: 834.369822674919, timestamp: 155043000000 },
  { balance: 223.2824555528039, timestamp: 15504408000 },
  { balance: 343.8236144736608, timestamp: 15504516000 },
  { balance: 570.2786758904394, timestamp: 15504624000 },
  { balance: 0, timestamp: 1550473200000 },
  { balance: 0, timestamp: 1550484000000 },
  { balance: 371.3580075666756, timestamp: 15504948000 },
  { balance: 0, timestamp: 1550505600000 },
  { balance: 834.0523196432006, timestamp: 15505164000 },
  { balance: 131.59899743652082, timestamp: 1550527200 },
  { balance: 89.60345336603682, timestamp: 15505380000 },
  { balance: 287.7083408931795, timestamp: 15505488000 },
  { balance: 486.23203595603127, timestamp: 1550559600 },
  { balance: 0, timestamp: 1550570400000 },
  { balance: 584.3994094738545, timestamp: 15505812000 },
  { balance: 0, timestamp: 1550592000000 },
  { balance: 357.168786274376, timestamp: 155060280000 },
  { balance: 904.5943714813404, timestamp: 15506136000 },
  { balance: 141.33746518199496, timestamp: 1550624400 },
  { balance: 564.2083844309647, timestamp: 15506352000 },
  { balance: 172.49572189472119, timestamp: 1550646000 },
  { balance: 171.14442140368104, timestamp: 1550656800 },
  { balance: 457.885643592677, timestamp: 155066760000 },
  { balance: 643.3862586539176, timestamp: 15506784000 },
  { balance: 76.52582907684558, timestamp: 15506892000 },
  { balance: 75.5843126996547, timestamp: 155070000000 },
  { balance: 957.8867197595636, timestamp: 15507108000 },
  { balance: 580.0119838045648, timestamp: 15507216000 },
  { balance: 242.10210393312727, timestamp: 1550732400 },
  { balance: 918.0893987776852, timestamp: 15507432000 },
  { balance: 655.8989670729881, timestamp: 15507540000 },
  { balance: 910.4616533399914, timestamp: 15507648000 },
  { balance: 820.1231240691907, timestamp: 15507756000 },
  { balance: 220.09257546188655, timestamp: 1550786400 },
  { balance: 216.95363971031622, timestamp: 1550797200 },
  { balance: 30.168949557216163, timestamp: 1550808000 },
  { balance: 416.20251425585076, timestamp: 1550818800 },
  { balance: 0, timestamp: 1550829600000 },
  { balance: 968.9981169513264, timestamp: 15508404000 },
  { balance: 0, timestamp: 1550851200000 },
  { balance: 195.03204062071288, timestamp: 1550862000 },
  { balance: 313.23607428656743, timestamp: 1550872800 },
  { balance: 392.55280294825013, timestamp: 1550883600 },
  { balance: 715.0706720046087, timestamp: 15508944000 },
  { balance: 400.5645060473695, timestamp: 15509052000 },
  { balance: 136.7754364158369, timestamp: 15509160000 },
  { balance: 308.83746035402424, timestamp: 1550926800 },
  { balance: 756.6708377914335, timestamp: 15509376000 },
  { balance: 754.9132472932682, timestamp: 15509484000 },
  { balance: 981.2788133463539, timestamp: 15509592000 },
  { balance: 489.56656264178224, timestamp: 1550970000 },
  { balance: 579.9993167273267, timestamp: 15509808000 },
  { balance: 233.729744154755, timestamp: 155099160000 },
  { balance: 58.921154228835704, timestamp: 1551002400 },
  { balance: 0, timestamp: 1551013200000 },
  { balance: 472.870304343086, timestamp: 155102400000 },
  { balance: 761.2506375878081, timestamp: 15510348000 },
  { balance: 315.71820498438365, timestamp: 1551045600 },
  { balance: 757.9087939312172, timestamp: 15510564000 },
  { balance: 0, timestamp: 1551067200000 },
  { balance: 737.8430495964063, timestamp: 15510780000 },
  { balance: 953.5760191414806, timestamp: 15510888000 },
  { balance: 321.9499828335366, timestamp: 15510996000 },
  { balance: 920.0837188496098, timestamp: 15511104000 },
  { balance: 0, timestamp: 1551121200000 },
  { balance: 783.0176682601422, timestamp: 15511320000 },
  { balance: 160.49976703515534, timestamp: 1551142800 },
  { balance: 462.0447804459176, timestamp: 15511536000 },
  { balance: 953.4404632103231, timestamp: 15511644000 },
  { balance: 206.6987274758789, timestamp: 15511752000 },
  { balance: 774.4872773357712, timestamp: 15511860000 },
  { balance: 822.3897296994622, timestamp: 15511968000 },
  { balance: 880.5366394351933, timestamp: 15512076000 },
  { balance: 0, timestamp: 1551218400000 },
  { balance: 734.2351346928837, timestamp: 15512292000 },
  { balance: 240.37136909693712, timestamp: 1551240000 },
  { balance: 780.9147432670875, timestamp: 15512508000 },
  { balance: 266.06650993084327, timestamp: 1551261600 },
  { balance: 812.5775223049371, timestamp: 15512724000 },
  { balance: 592.8595438889053, timestamp: 15512832000 },
  { balance: 829.2197245850767, timestamp: 15512940000 },
  { balance: 129.76490774079875, timestamp: 1551304800 },
  { balance: 885.1512451972916, timestamp: 15513156000 },
  { balance: 93.74646385007712, timestamp: 15513264000 },
  { balance: 344.6014094252994, timestamp: 15513372000 },
  { balance: 780.6062434768062, timestamp: 15513480000 },
  { balance: 828.3332383132953, timestamp: 15513588000 },
  { balance: 791.8730260047715, timestamp: 15513696000 },
  { balance: 0, timestamp: 1551380400000 },
  { balance: 838.3638684277195, timestamp: 15513912000 },
  { balance: 128.32731279060704, timestamp: 1551402000 },
  { balance: 824.7680057119819, timestamp: 15514128000 },
  { balance: 937.878211625087, timestamp: 155142360000 },
  { balance: 482.9729468073061, timestamp: 15514344000 },
  { balance: 552.9700126463348, timestamp: 15514452000 },
  { balance: 709.0029106323084, timestamp: 15514560000 },
  { balance: 768.6928809504217, timestamp: 15514668000 },
  { balance: 267.32805184340356, timestamp: 1551477600 },
  { balance: 30.47889554342631, timestamp: 15514884000 },
  { balance: 17.883128880282094, timestamp: 1551499200 },
  { balance: 908.6825422011326, timestamp: 15515100000 },
  { balance: 813.3554853517076, timestamp: 15515208000 },
  { balance: 0, timestamp: 1551531600000 },
  { balance: 417.52494075562987, timestamp: 1551542400 },
  { balance: 515.923365131854, timestamp: 155155320000 },
  { balance: 209.56883221010503, timestamp: 1551564000 },
  { balance: 0, timestamp: 1551574800000 },
  { balance: 299.54811809653916, timestamp: 1551585600 },
  { balance: 0, timestamp: 1551596400000 },
  { balance: 411.7697716222184, timestamp: 15516072000 },
  { balance: 780.4048113731623, timestamp: 15516180000 },
  { balance: 322.9661932655417, timestamp: 15516288000 },
  { balance: 0, timestamp: 1551639600000 },
  { balance: 579.1609915160693, timestamp: 15516504000 },
  { balance: 734.8169075463388, timestamp: 15516612000 },
  { balance: 256.57686925393074, timestamp: 1551672000 },
  { balance: 747.0547113525419, timestamp: 15516828000 },
  { balance: 110.67727086257739, timestamp: 1551693600 },
  { balance: 44.65631777069423, timestamp: 15517044000 },
  { balance: 917.7931594689121, timestamp: 15517152000 },
  { balance: 546.0310999388228, timestamp: 15517260000 },
  { balance: 386.6533673384573, timestamp: 15517368000 },
  { balance: 163.7672280550879, timestamp: 15517476000 },
  { balance: 786.5979917336856, timestamp: 15517584000 },
  { balance: 826.9362983757345, timestamp: 15517692000 },
  { balance: 845.8368390086101, timestamp: 15517800000 },
  { balance: 782.1270940763096, timestamp: 15517908000 },
  { balance: 286.017385947485, timestamp: 155180160000 },
  { balance: 747.3499667023995, timestamp: 15518124000 },
  { balance: 135.39556212686742, timestamp: 1551823200 },
  { balance: 0, timestamp: 1551834000000 },
  { balance: 712.6128429733776, timestamp: 15518448000 },
  { balance: 600.6237928008698, timestamp: 15518556000 },
  { balance: 205.99115010568502, timestamp: 1551866400 },
  { balance: 678.359548240211, timestamp: 155187720000 },
  { balance: 895.7188470500963, timestamp: 15518880000 },
  { balance: 4.501848018966026, timestamp: 15518988000 },
  { balance: 493.3375954043673, timestamp: 15519096000 },
  { balance: 947.1721983291412, timestamp: 15519204000 },
  { balance: 973.890836044681, timestamp: 155193120000 },
  { balance: 358.9367510390713, timestamp: 15519420000 },
  { balance: 776.2980377888524, timestamp: 15519528000 },
  { balance: 512.87224824066, timestamp: 1551963600000 },
  { balance: 564.1113458427951, timestamp: 15519744000 },
  { balance: 422.26582247598276, timestamp: 1551985200 },
  { balance: 527.0466608457374, timestamp: 15519960000 },
  { balance: 848.9215886343242, timestamp: 15520068000 },
  { balance: 452.22160113051314, timestamp: 1552017600 },
  { balance: 310.3220508062536, timestamp: 15520284000 },
  { balance: 847.0819830117489, timestamp: 15520392000 },
  { balance: 485.9047858132539, timestamp: 15520500000 },
  { balance: 370.3371357475087, timestamp: 15520608000 },
  { balance: 0, timestamp: 1552071600000 },
  { balance: 205.28320717362791, timestamp: 1552082400 },
  { balance: 707.3699987830366, timestamp: 15520932000 },
  { balance: 0, timestamp: 1552104000000 },
  { balance: 30.38208812733334, timestamp: 15521148000 },
  { balance: 793.6241651467363, timestamp: 15521256000 },
  { balance: 132.92854487546003, timestamp: 1552136400 },
  { balance: 11.757925482585252, timestamp: 1552147200 },
  { balance: 260.99161430735984, timestamp: 1552158000 },
  { balance: 650.4710244540981, timestamp: 15521688000 },
  { balance: 147.35897185510117, timestamp: 1552179600 },
  { balance: 942.1140405740547, timestamp: 15521904000 },
  { balance: 331.3202300657372, timestamp: 15522012000 },
  { balance: 268.61757275091946, timestamp: 1552212000 },
  { balance: 313.3414191691093, timestamp: 15522228000 },
  { balance: 244.87507424888076, timestamp: 1552233600 },
  { balance: 465.0115200409033, timestamp: 15522444000 },
  { balance: 620.2902045338963, timestamp: 15522552000 },
  { balance: 124.08363973493053, timestamp: 1552266000 },
  { balance: 440.92094061035914, timestamp: 1552276800 },
  { balance: 185.11509686661643, timestamp: 1552287600 },
  { balance: 940.785412935357, timestamp: 155229840000 },
  { balance: 986.5073536464259, timestamp: 15523092000 },
  { balance: 894.3739572389804, timestamp: 15523200000 },
  { balance: 431.55310013447325, timestamp: 1552330800 },
  { balance: 889.1336939608536, timestamp: 15523416000 },
  { balance: 424.67607634552974, timestamp: 1552352400 },
  { balance: 0, timestamp: 1552363200000 },
  { balance: 0, timestamp: 1552374000000 },
  { balance: 580.4486679164764, timestamp: 15523848000 },
  { balance: 612.389349148577, timestamp: 155239560000 },
  { balance: 0, timestamp: 1552406400000 },
  { balance: 796.4404147951083, timestamp: 15524172000 },
  { balance: 918.0792865065031, timestamp: 15524280000 },
  { balance: 973.0828785396701, timestamp: 15524388000 },
  { balance: 103.95291220218095, timestamp: 1552449600 },
  { balance: 148.70418458344338, timestamp: 1552460400 },
  { balance: 970.6777335726547, timestamp: 15524712000 },
  { balance: 532.8504954288486, timestamp: 15524820000 },
  { balance: 574.9800025873584, timestamp: 15524928000 },
  { balance: 585.4717154972948, timestamp: 15525036000 },
  { balance: 0, timestamp: 1552514400000 },
  { balance: 843.4951187430185, timestamp: 15525252000 },
  { balance: 773.3433866651458, timestamp: 15525360000 },
  { balance: 283.70104267445106, timestamp: 1552546800 },
  { balance: 400.75616301147886, timestamp: 1552557600 },
  { balance: 807.7128955167653, timestamp: 15525684000 }
];

export const VOTE_DETAILS: VoteDetail[] = [
  { limit: '50%', label: 'MEW holders' },
  { limit: '50%', label: 'cool group' },
  { limit: '1 person', label: 'Ombudspeople' }
];

export const BOND_DETAIL: BondDetail = {
  value: 0.3,
  token: 'NEAR'
};
